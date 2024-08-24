import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Button from "../../utils/Button";
import { useTranslation } from "react-i18next";
import Modal from "../../utils/Modal";

function Success(props) {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const url = "/images/result.png";
  const repeatedImg = Array(10).fill(url);

  const heading = "O'z ma'lumotlaringizni qoldiring";
  const paragraph =
    "Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi";

  return (
    <div className="lg:my-[3rem] my-8 lg:ml-[6rem] lg:px-0 px-6 flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center lg:mb-8 mb-4">
        <h2 className="lg:text-4xl lg:leading-[3rem] text-2xl leading-[2rem] text-center font-medium lg:px-10 px-8">
          {t("success.title")}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:items-start justify-between lg:gap-[5rem] gap-[2rem] lg:mt-16">
        <div className=" lg:text-left">
          <p className="lg:text-2xl text-xl lg:mb-8 mb-4 lg:leading-10">
            <span className="text-gray-300">TOPIK academy consulting</span>{" "}
            {t("success.description")}
          </p>
          <div className="lg:text-left text-center">
            <span className="block mb-4 w-[16rem] mx-auto lg:mx-0">
              {t("success.consultationInfo")}
            </span>
            <button
              className="lg:px-12 px-8 lg:py-6 py-3 lg:rounded-3xl rounded-lg shadow-md shadow-slate-400 bg-teal-400 text-white
         hover:bg-teal-500 active:scale-95"
              onClick={() => setOpen(true)}
            >
              {t("success.applyButton")}
            </button>
          </div>
        </div>

        <div className="w-[60%] hidden lg:block">
          <Marquee gradient>
            {repeatedImg.map((item, index) => (
              <img key={index} src={item} alt={item} className="mx-6" />
            ))}
          </Marquee>
        </div>
      </div>
      {open && (
        <Modal
          onClose={() => setOpen(false)}
          heading={heading}
          paragraph={paragraph}
        />
      )}
    </div>
  );
}

export default Success;
