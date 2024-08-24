import React, { useEffect } from "react";
import SendingMsg from "./Message";
import { t } from "i18next";

function Modal({ onClose }) {
  const { sendMessage, error, loading, success } = SendingMsg();

  // Close modal when the message is successfully sent
  useEffect(() => {
    if (success) {
      onClose();
    }
  }, [success, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white md:w-1/3 w-[90%] p-10 rounded-lg shadow-lg z-10">
        <h2 className="text-center md:text-2xl font-medium mb-4">
          O'z ma'lumotlaringizni qoldiring
        </h2>
        <p className="text-center mb-6">
          Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan
          bog'lanishadi
        </p>
        <form onSubmit={sendMessage} className="flex flex-col gap-4">
          <input
            id="name"
            type="text"
            placeholder={t("message.name")}
            className="px-5 py-4 rounded-md outline-none border"
            required
          />
          <input
            id="tel"
            type="tel"
            placeholder={t("message.tel")}
            className="px-5 py-4 rounded-md outline-none border"
            required
          />
          <button className="bg-teal-400 text-white py-3 rounded-md hover:bg-teal-500 active:scale-95">
            {loading ? t("message.sending") : t("modal.btnFree")}
          </button>
        </form>
        {success && (
          <div className="absolute top-4 right-4 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center shadow-lg">
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
            <p className="text-green-700">zor</p>
          </div>
        )}
        {error && (
          <div className="absolute top-4 left-4 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center shadow-lg">
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
    </div>
  );
}

export default Modal;
