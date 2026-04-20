const fs = require('fs');
const path = require('path');

const email = process.argv[2] || 'no-email-provided';
const timestamp = new Date().toISOString();

const logFile = '/tmp/email-submissions.log';

const logEntry = {
  timestamp,
  email,
  pid: process.pid,
  ppid: process.ppid
};

try {
  const logLine = JSON.stringify(logEntry) + '\n';
  fs.appendFileSync(logFile, logLine, 'utf8');

  if (process.send) {
    process.send({
      status: 'success',
      message: `Email ${email} записан в ${logFile}`,
    });
  }
} catch (error) {
  if (process.send) {
    process.send({
      status: 'error',
      error: error.message
    });
  }
}

setTimeout(() => {
  process.exit(0);
}, 100);