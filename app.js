let tg = window.Telegram.WebApp;
tg.expand();

// Одна кнопка — сразу отправляет данные
document.getElementById("btn1").addEventListener("click", function(){
    tg.sendData("1");
});

// Скрываем все остальные кнопки (они не нужны для теста)
document.getElementById("btn2").style.display = "none";
document.getElementById("btn3").style.display = "none";
document.getElementById("btn4").style.display = "none";
tg.MainButton.onClick(function(){
    console.log("Кнопка нажата! Отправляем: " + item);
    tg.sendData(item);
});
