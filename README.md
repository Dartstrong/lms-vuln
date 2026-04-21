# Vulnerable LMS Application

Уязвимое веб-приложение LMS для демонстрации уязвимости **PT-2025-48817** (React Server Components RCE)

## 📋 Описание уязвимости

Уязвимость в `react-server-dom-webpack` позволяет злоумышленнику через Server Actions получить доступ к prototype chain и выполнить произвольный код на сервере.

**Идентификатор:** PT-2025-48817  
**Тип:** Обход ограничений серверных действий  
**Класс CWE:** CWE-913 - Improper Control of Dynamically-Managed Code Resources  
**Уровень риска:** Критический (CVSS 10.0)  

## 🚀 Быстрый старт

```bash
# Клонируйте репозиторий
git clone https://github.com/your-username/lms-vuln.git
cd lms-vuln

# Установите зависимости
npm install

# Запустите сервер
npm run dev -- -H 0.0.0.0 -p 3000
