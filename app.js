let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

document.getElementById("btn1").addEventListener("click", function(){
    item = "1";
    tg.MainButton.setText("Вывести информацию по Петру I");
    tg.MainButton.show();
});

document.getElementById("btn2").addEventListener("click", function(){
    item = "2";
    tg.MainButton.setText("Вывести информацию по Екатерине II");
    tg.MainButton.show();
});

document.getElementById("btn3").addEventListener("click", function(){
    item = "3";
    tg.MainButton.setText("Вывести информацию по Гагарину");
    tg.MainButton.show();
});

document.getElementById("btn4").addEventListener("click", function(){
    item = "4";
    tg.MainButton.setText("Вывести информацию по Суворову");
    tg.MainButton.show();
});

// ВАЖНО: используем onClick вместо onEvent!
tg.MainButton.onClick(function(){
    console.log("Кнопка нажата! Отправляем: " + item);
    tg.sendData(item);
});