import axios from "axios";

export const sendTelegram = async (message: string) => {
  await axios.post(
    "https://api.telegram.org/bot7116905595:AAHI3nkekurzOGLKA3BqPVNJJ7c9BffBMOo/sendMessage",
    {
      chat_id: -4532825102,
      text: message,
      parse_mode: "html",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
