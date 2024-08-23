import React from "react";
import { useTranslation } from "react-i18next";

function Scholarship(props) {
  const { t } = useTranslation();

  return (
    <div className="my-[3rem]">
      <h2 className="md:text-6xl text-4xl text-center md:leading-[6rem] leading-[3rem] md:px-[10rem] px-[5rem]">
        {t("scholarship.title")}
      </h2>
      <div className="mt-[5rem] md:flex md:items-center gap-[5rem]">
        <div className="md:px-0 px-[5rem]">
          <img src="/images/scholarship.png" alt="sa" />
        </div>
        <div className="md:my-0 my-10 md:px-0 px-10">
          <div className="mb-10">
            <h3 className="md:text-3xl text-2xl mb-6 font-medium">
              {t("scholarship.gksGrantTitle")}
            </h3>
            <p className="text-xl leading-8">
              {t("scholarship.gksGrantDescription")}
            </p>
          </div>
          <div>
            <h3 className="md:text-3xl text-2xl mb-6 font-medium">
              {t("scholarship.whatGKSProvidesTitle")}
            </h3>
            <ul className="text-xl list-disc leading-8 ml-5">
              <li>{t("scholarship.whatGKSProvides.point1")}</li>
              <li>{t("scholarship.whatGKSProvides.point2")}</li>
              <li>{t("scholarship.whatGKSProvides.point3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scholarship;
