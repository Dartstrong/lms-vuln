import { NextResponse } from 'next/server';
import * as child_process from 'child_process';
import * as fs from 'fs';

const LOG_FILE = '/tmp/app.log';

function log(message) {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, logLine, 'utf8');
}

const bundledModules = {
  'child_process': child_process,
};

global.__webpack_modules__ = {};
for (const [id, mod] of Object.entries(bundledModules)) {
  global.__webpack_modules__[id] = function(module, exports) {
    module.exports = mod;
  };
}

global.__webpack_require__ = function(moduleId) {
  if (bundledModules[moduleId]) {
    return bundledModules[moduleId];
  }
  
  if (global.__webpack_modules__[moduleId]) {
    const module = { exports: {} };
    global.__webpack_modules__[moduleId](module, module.exports);
    return module.exports;
  }
  
  throw new Error(`Module '${moduleId}' not in bundle`);
};

global.__webpack_require__.m = global.__webpack_modules__;
global.__webpack_require__.c = {};
global.__webpack_require__.d = function(exports, name, getter) {
  if (!global.__webpack_require__.o(exports, name)) {
    Object.defineProperty(exports, name, { enumerable: true, get: getter });
  }
};
global.__webpack_require__.o = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
global.__webpack_require__.r = function(exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
};

global.__webpack_chunk_load__ = () => Promise.resolve();

let decodeAction = null;

async function loadVulnerableLibrary() {
  if (decodeAction) return decodeAction;
  const serverModule = await import('react-server-dom-webpack/server');
  decodeAction = serverModule.decodeAction;
  return decodeAction;
}

const serverManifest = {
  'child_process': {
    id: 'child_process',
    name: 'fork',
    chunks: []
  },
};

export async function POST(request) {
  try {
    const decode = await loadVulnerableLibrary();
    const formData = await request.formData();
    
    for (const [key, value] of formData.entries()) {
      log(`${key}: ${value}`);
    }
    
    const actionFn = await decode(formData, serverManifest);
    
    if (!actionFn) {
      log('ERROR: No action found');
      return NextResponse.json({ error: 'No action found' }, { status: 400 });
    }
    
    if (typeof actionFn === 'function') {
      try {
        let result = actionFn();
        
        if (result instanceof Promise) result = await result;
        if (Buffer.isBuffer(result)) result = result.toString('utf8');
        
        log(`SUCCESS: ${actionFn.name} -> ${typeof result === 'object' ? 'Object' : String(result).substring(0, 200)}`);
        
        return NextResponse.json({
          success: true,
          function: actionFn.name || 'anonymous',
          result: typeof result === 'object' ? result : String(result)
        });
      } catch (e) {
        log(`ERROR: ${actionFn.name} - ${e.message}`);
        return NextResponse.json({
          success: false,
          function: actionFn.name,
          error: e.message
        });
      }
    }

    log(`RESULT: ${typeof actionFn} - ${String(actionFn)}`);
    
    return NextResponse.json({
      type: typeof actionFn,
      value: String(actionFn)
    });
    
  } catch (error) {
    log(`CRITICAL ERROR: ${error.message}`);
    return NextResponse.json({
      error: error.message
    }, { status: 500 });
  }
}