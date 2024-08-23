import { useTranslation } from "react-i18next";
import Button from "../../utils/Button";
import axios from "axios";
import { useState, useEffect } from "react";

function Message(props) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const token = "7389531994:AAE3VRO4wVMfCkUzx7JNQjyATf8h28ragjE";
    const chatId = -1002185308774;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = e.target.elements.name.value;
    const tel = e.target.elements.tel.value;

    axios({
      method: "POST",
      url: url,
      data: {
        chat_id: chatId,
        text: `Name: ${name}\nTelephone: ${tel}`,
      },
    })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        setError("Oops! Something went wrong. Please try again.");
      });
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 4000000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <div className="relative bg-purple-100 rounded-xl my-16 p-8 flex flex-col md:flex-row md:items-start md:justify-between md:mx-[10rem]">
      <div className="mb-8 md:mb-0 md:max-w-[450px]">
        <h2 className="text-2xl md:text-4xl font-semibold md:leading-[3rem] mb-4 md:mb-10">
          {t("message.heading")}
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          {t("message.desc")}
        </p>
      </div>
      <form
        action=""
        className="flex flex-col gap-6 md:w-[25rem]"
        onSubmit={sendMessage}
      >
        <input
          id="name"
          type="text"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder={t("message.name")}
          required
        />
        <input
          id="tel"
          type="tel"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder={t("message.tel")}
          required
        />
        <Button
          title={loading ? t("message.sending") : t("message.button")}
          padding="0.5rem 3rem"
          disabled={loading}
        />
      </form>
      {success && (
        <div className="absolute md:top-[-3rem] md:right-[-12rem] top-0 right-5 transform -translate-x-1/2 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center shadow-lg">
          <svg
            className="w-6 h-6 text-green-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <p className="text-green-700">{t("message.success")}</p>
        </div>
      )}
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center shadow-lg">
          <svg
            className="w-6 h-6 text-red-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <p className="text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}

export default Message;
