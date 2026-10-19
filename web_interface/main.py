from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

# Токен твоего бота
TOKEN = '8846833767:AAGu5oH4VqVD2ugunS2TH5tMrTfLeBrydZg'

# Ссылка на твой интерфейс (ЗАМЕНИ НА СВОЮ С GITHUB PAGES!)
WEB_APP_URL = "https://твой-логин.github.io/historical-web-app/"

bot = Bot(token=TOKEN)
dp = Dispatcher()

# Словарь с описаниями исторических личностей
DISC = {
    '1': "👑 **Пётр I Великий** (1672-1725)\n\n"
         "Последний царь всея Руси и первый Император Всероссийский. "
         "Основал Санкт-Петербург (1703), создал регулярную армию и флот, "
         "провёл масштабные реформы, определившие развитие России в XVIII веке.",

    '2': "👑 **Екатерина II Великая** (1729-1796)\n\n"
         "Императрица всероссийская. Правила 34 года. "
         "При ней были присоединены Крым и Новороссия, "
         "проведены реформы управления и образования, расцвет культуры и искусств.",

    '3': "🚀 **Юрий Алексеевич Гагарин** (1934-1968)\n\n"
         "Советский лётчик-космонавт, первый человек в мировой истории, "
         "совершивший полёт в космическое пространство 12 апреля 1961 года. "
         "Полёт длился 108 минут. Герой Советского Союза.",

    '4': "️ **Александр Васильевич Суворов** (1729-1800)\n\n"
         "Русский полководец, генералиссимус, князь Италийский. "
         "Не проиграл ни одного из 60+ сражений. "
         "Автор военной науки «Наука побеждать»."
}


# Обработчик команды /start
@dp.message(Command('start'))
async def start_command(message: Message):
    # Создаём клавиатуру с кнопкой Web App
    web_app = WebAppInfo(url=WEB_APP_URL)
    keyboard = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="📚 Исторические личности", web_app=web_app)]
        ],
        resize_keyboard=True
    )
    await message.answer(
        "👋 Привет! Я бот «Исторические личности».\n"
        "Нажми на кнопку ниже, чтобы открыть интерфейс:",
        reply_markup=keyboard
    )


# Обработчик данных, пришедших из Web App
@dp.message()
async def web_app_data_handler(message: Message):
    # Проверяем, есть ли данные от Web App
    if message.web_app_data:
        data = message.web_app_data.data  # Получаем "1", "2", "3" или "4"

        # Ищем описание в словаре и отправляем пользователю
        if data in DISC:
            await message.answer(DISC[data], parse_mode='Markdown')
        else:
            await message.answer("❓ Информация не найдена.")


# Запуск бота
import asyncio


async def main():
    print("✅ Бот «Исторические личности» (aiogram 3.x) запущен...")
    await dp.start_polling(bot)


if __name__ == '__main__':
    asyncio.run(main())