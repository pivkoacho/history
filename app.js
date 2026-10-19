let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();   // ← обязательно

let selectedItem = "";

// Настройка главной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText("Показать информацию");
tg.MainButton.hide();

// Обработчики кнопок выбора личности
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        // снимаем выделение со всех
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('selected');
        });

        // выделяем текущую
        this.classList.add('selected');
        selectedItem = this.getAttribute('data-value');

        // показываем зелёную кнопку
        tg.MainButton.setText("Показать информацию");
        tg.MainButton.show();
    });
});

// Нажатие на зелёную кнопку (MainButton)
tg.onEvent('mainButtonClicked', function () {
    if (selectedItem) {
        console.log('Отправляем:', selectedItem);
        tg.sendData(selectedItem);   // ← закрывает WebApp и отправляет данные боту
    } else {
        tg.showAlert('Пожалуйста, выберите историческую личность!');
    }
});
