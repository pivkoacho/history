let tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем приложение на весь экран

let selectedItem = "";

// Навешиваем обработчик на все кнопки
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        selectedItem = this.getAttribute('data-value');
        // Настраиваем главную кнопку внизу экрана
        tg.MainButton.setText("Показать информацию");
        tg.MainButton.show();
    });
});

// Обработка нажатия на главную кнопку
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    if (selectedItem) {
        tg.sendData(selectedItem); // Отправляем данные боту
    }
});
