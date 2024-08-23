import React from "react";
import Marquee from "react-fast-marquee";
import Button from "../../utils/Button";
import { useTranslation } from "react-i18next";

function Success(props) {
  const { t } = useTranslation();
  const url = "/images/result.png";
  const repeatedImg = Array(10).fill(url);

  return (
    <div className="my-[3rem] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-8">
        <h2 className="md:text-4xl md:leading-[3rem] text-2xl leading-[1.5rem] text-center font-medium">
          {t("success.title")}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-between md:gap-[5rem] gap-[2rem] md:mt-16">
        <div className="md:ml-[8rem] ml-4 text-center md:text-left">
          <p className="md:text-2xl text-xl mb-8 md:leading-10">
            <span className="text-gray-300">TOPIK academy consulting</span>{" "}
            {t("success.description")}
          </p>
          <div>
            <span className="block mb-4 w-[16rem] mx-auto md:mx-0">
              {t("success.consultationInfo")}
            </span>
            <Button title={t("success.applyButton")} padding="1.2rem 2.8rem" />
          </div>
        </div>

        <div className="md:block hidden w-[60%]">
          <Marquee gradient>
            {repeatedImg.map((item, index) => (
              <img key={index} src={item} alt={item} className="mx-6" />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Success;
