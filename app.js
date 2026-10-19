let tg = window.Telegram.WebApp;
tg.expand();

let selectedItem = "";

// Настраиваем главную кнопку
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

// Добавляем обработчики на все кнопки
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Убираем выделение со всех кнопок
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Выделяем нажатую кнопку
        this.classList.add('selected');
        
        // Сохраняем выбранное значение
        selectedItem = this.getAttribute('data-value');
        
        // Показываем главную кнопку с текстом
        tg.MainButton.setText("Показать информацию");
        tg.MainButton.show();
    });
});

// Обработка нажатия на главную кнопку
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    if (selectedItem) {
        console.log("Отправляем данные:", selectedItem);
        tg.sendData(selectedItem);
    } else {
        tg.showAlert("Пожалуйста, выберите историческую личность!");
    }
});
