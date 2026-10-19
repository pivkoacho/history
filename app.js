let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

let selectedItem = "";

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText("Показать информацию");
tg.MainButton.hide();

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('selected');
        });

        this.classList.add('selected');
        selectedItem = this.getAttribute('data-value');

        tg.MainButton.setText("Показать информацию");
        tg.MainButton.show();
    });
});

tg.onEvent('mainButtonClicked', function () {
    if (selectedItem) {
        tg.sendData(selectedItem);
    } else {
        tg.showAlert('Пожалуйста, выберите историческую личность!');
    }
});
