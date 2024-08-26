import { useState } from "react";
import Button from "../../utils/Button";
import { useTranslation } from "react-i18next";
import Modal from "../../utils/Modal";

function Courses(props) {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      type: t("course.intensiveType"),
      desc: t("course.intensiveDesc"),
      duration: `5${t("course.month")}`,
      price: "970.000 so’m",
      img: "/images/course.png",
    },
    {
      id: 2,
      type: t("course.regularType"),
      desc: t("course.regularDesc"),
      duration: `5${t("course.month")}`,
      price: "560.000 so’m",
      img: "/images/course.png",
    },
    {
      id: 3,
      type: t("course.individualType"),
      desc: t("course.individualDesc"),
      duration: `5${t("course.month")}`,
      price: "1.870.000 so’m",
      img: "/images/course.png",
    },
  ];

  const paragraph =
    "Bepul darsga o'z joyingizni band qilish uchun ma'lumotlaringizni qoldiring va biz siz bilan tez orada bog'lanamiz";

  const selectedItem = items.find((item) => item.id === selectedItemId);

  return (
    <div id="courses" className="lg:my-16 my-8">
      <h2 className="lg:text-5xl text-2xl text-center font-medium">
        {t("course.header")}
      </h2>
      <div className="lg:my-12 my-6 lg:px-[6rem] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-gray-200 rounded-3xl overflow-hidden"
          >
            <div className="h-48 lg:h-60 w-full">
              <img
                src={item.img}
                alt={item.type}
                className="object-cover h-full w-full"
              />
            </div>

            <div className="lg:px-5 px-4 py-3  flex flex-col justify-between flex-grow">
              <div className="flex items-center justify-between lg:mb-6 mb-3">
                <p className="text-xl font-medium">{item.type}</p>
                <button className="px-3 py-1 bg-teal-400 text-white text-xs rounded-md">{`${t(
                  "course.durationLabel"
                )} ${item.duration}`}</button>
              </div>
              <p className="lg:mb-6 mb-3 lg:text-base text-sm">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between">
                <button
                  className="lg:px-8 sm:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm lg:rounded-3xl rounded-lg shadow-md shadow-slate-400 bg-teal-400 text-white
         hover:bg-teal-500 active:scale-95 transition-all duration-300 ease-in"
                  onClick={() => setSelectedItemId(item.id)}
                >
                  {t("course.registerButton")}
                </button>
                <p className="text-teal-600 lg:text-base text-sm">
                  {item.price} {t("course.perMonth")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal
          onClose={() => setSelectedItemId(null)}
          heading={selectedItem.type}
          paragraph={paragraph}
        />
      )}
    </div>
  );
}

export default Courses;
