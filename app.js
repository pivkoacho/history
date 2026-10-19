let tg = window.Telegram.WebApp;
tg.expand();

// Настраиваем внешний вид главной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

// Обработчики для кнопок выбора личности
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

// ИСПРАВЛЕНО: Используем правильный метод подписки на событие
tg.onEvent('mainButtonClicked', function(){
    console.log("Кнопка нажата! Отправляем: " + item);
    
    // Проверка на всякий случай, чтобы не отправить пустоту
    if (item !== "") {
        tg.sendData(item);
    }
});
// ВАЖНО: используем onClick вместо onEvent!
tg.MainButton.onClick(function(){
    console.log("Кнопка нажата! Отправляем: " + item);
    tg.sendData(item);
});
