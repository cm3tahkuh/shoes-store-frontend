import { NextResponse } from "next/server";

//Оформление заказа, парсинг данных с корзины и данные пользователя

export async function POST(req) {
  try {
    const { email, name, cart } = await req.json();

    if (!email || !name || cart.length === 0) {
      return NextResponse.json(
        { message: "Ошибка! Неполные данные." },
        { status: 400 }
      );
    }

    const message = `
📦 *Новый заказ в магазине*  
👤 *Имя:* ${name}  
📧 *Почта:* ${email}  

🛍 *Товары:*  
${cart
  .map(
    (item, i) =>
      `${i + 1}. ${item.title.replace(/[*_~`]/g, "")} x${item.quantity} - ${
        item.price
      } ₽`
  )
  .join("\n")}

💰 *Итого:* ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} ₽
    `;

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TOKEN || !CHAT_ID) {
      console.error("Ошибка: Переменные окружения отсутствуют!");
      return NextResponse.json(
        { message: "Ошибка сервера. Нет токена." },
        { status: 500 }
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    const responseData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error("Ошибка Telegram API:", responseData);
      return NextResponse.json(
        { message: "Ошибка отправки в Telegram", error: responseData },
        { status: 500 }
      );
    }

    console.log("Успешный ответ Telegram:", responseData);
    return NextResponse.json({ message: "Заказ успешно отправлен!" });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    return NextResponse.json({ message: "Ошибка сервера." }, { status: 500 });
  }
}
