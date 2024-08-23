import React from "react";
import { useTranslation } from "react-i18next";

function Advantage(props) {
  const { t } = useTranslation();

  const items = [
    {
      title: t("advantage.professionalTeachers"),
      desc: t("advantage.professionalTeachersDesc"),
    },
    {
      title: t("advantage.freeCoworking"),
      desc: t("advantage.freeCoworkingDesc"),
    },
    {
      title: t("advantage.weeklyEvents"),
      desc: t("advantage.weeklyEventsDesc"),
    },
    {
      title: t("advantage.freeMockExams"),
      desc: t("advantage.freeMockExamsDesc"),
    },
    {
      title: t("advantage.assistantCurators"),
      desc: t("advantage.assistantCuratorsDesc"),
    },
    {
      title: t("advantage.consultingServices"),
      desc: t("advantage.consultingServicesDesc"),
    },
  ];

  return (
    <div className="mt-10 md:px-[6rem] px-16">
      <h2 className="md:text-4xl text-2xl font-medium text-center">
        {t("advantage.header")}
      </h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {items.map((item, index) => (
          <div className="relative" key={index}>
            <div className="px-6 py-10 rounded-2xl bg-slate-100 lg:min-h-52 md:min-h-64">
              <h4 className="md:text-2xl text-xl mb-8">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="absolute top-[-1rem] left-7">
              <span className="text-white bg-green-500 text-3xl p-4 rounded-lg font-bold">
                {"0"}
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantage;
