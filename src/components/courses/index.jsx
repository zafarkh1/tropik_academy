import React from "react";
import Button from "../../utils/Button";
import { useTranslation } from "react-i18next";

function Courses(props) {
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

  return (
    <div className="my-16">
      <h2 className="md:text-5xl text-2xl text-center font-medium">
        {t("course.header")}
      </h2>
      <div className="my-12 md:px-[6rem] grid sm:grid-cols-1 lg:grid-cols-3 gap-8 px-[4rem]">
        {items.map((item) => (
          <div
            className="flex flex-col bg-gray-200 rounded-3xl overflow-hidden"
            key={item.id}
          >
            <div className="h-48 md:h-60 w-full">
              <img
                src={item.img}
                alt={item.type}
                className="object-cover h-full w-full"
              />
            </div>

            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-medium">{item.type}</p>
                <Button
                  title={`${t("course.durationLabel")} ${item.duration}`}
                  padding="0.1rem 1rem"
                />
              </div>

              <p className="mb-6">{item.desc}</p>

              <div className="mt-auto flex items-center justify-between">
                <Button
                  title={t("course.registerButton")}
                  padding="0.3rem 1.2rem"
                />
                <p className="text-teal-600">
                  {item.price} {t("course.perMonth")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
