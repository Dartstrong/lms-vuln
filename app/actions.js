console.log("Модуль greetModule запущен!");
process.send({ message: "Привет от дочернего процесса! Ваш запрос успешно обработан." });
process.exit(0);