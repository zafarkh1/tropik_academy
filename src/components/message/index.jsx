import { useTranslation } from "react-i18next";
import Button from "../../utils/Button";
import SendingMsg from "../../utils/Message";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Message(props) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [errors, setErrors] = useState({ name: "", tel: "" });
  const { t } = useTranslation();
  const { sendMessage, loading } = SendingMsg();

  const validateField = (fieldName, value) => {
    let error = "";

    // Trim the value to remove leading/trailing spaces
    const trimmedValue = value.trim();

    // Define a regex to check for invalid characters (non-alphabetical or name-related characters)
    const invalidCharacters = /[^a-zA-Z\s'-]/; // Allows letters, spaces, hyphens, and apostrophes

    switch (fieldName) {
      case "name":
        if (!trimmedValue) {
          error = t("message.validation.nameRequired");
        } else if (trimmedValue.length < 3) {
          error = t("message.validation.nameMinLength");
        } else if (invalidCharacters.test(trimmedValue)) {
          error = t("message.validation.nameInvalidChars");
        } else if (!isNaN(parseFloat(trimmedValue)) && isFinite(trimmedValue)) {
          error = t("message.validation.nameNotNumber");
        }
        break;

      case "tel":
        if (!trimmedValue) {
          error = t("message.validation.telRequired");
        } else if (trimmedValue.length < 10) {
          error = t("message.validation.telInvalid");
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
    return error === "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateField("name", name);
    const isTelValid = validateField("tel", tel);

    if (isNameValid && isTelValid) {
      try {
        await sendMessage({ name, tel });
        toast.success(t("message.success"));
        setName("");
        setTel("");
        setErrors({ name: "", tel: "" });
      } catch (err) {
        toast.error(t("message.error"));
      }
    }
  };

  return (
    <div>
      <div className="relative bg-purple-100 md:rounded-xl lg:my-16 sm:my-8 p-8 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 xl:mx-[10rem] sm:mx-6">
        <div className="mb-8 md:mb-0 md:max-w-[450px]">
          <h2 className="text-2xl lg:text-4xl font-semibold lg:leading-[3rem] mb-4 lg:mb-10">
            {t("message.heading")}
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            {t("message.desc")}
          </p>
        </div>
        <form
          className="flex flex-col gap-6 md:w-[25rem]"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              id="name"
              type="text"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
              placeholder={t("message.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => validateField("name", name)}
            />
            {errors.name && (
              <p className="text-red-700 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <PhoneInput
              country={"uz"}
              value={tel}
              onChange={(phone) => setTel(phone)}
              containerStyle={{ width: "100%" }}
              inputProps={{
                id: "tel",
              }}
              inputStyle={{
                width: "100%",
                borderColor: "#D1D5DB",
              }}
              containerClass="inputContainer"
              inputClass="contactInput"
            />
            {errors.tel && <p className="text-red-700 text-sm">{errors.tel}</p>}
          </div>

          <Button
            title={loading ? t("message.sending") : t("message.button")}
            padding="0.5rem 3rem"
            disabled={loading}
          />
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Message;
