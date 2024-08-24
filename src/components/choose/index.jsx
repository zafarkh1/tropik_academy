import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../utils/Modal";

function Choose(props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const items = [
    { img: "/images/choose1.png", title: t("choose.item1") },
    { img: "/images/choose2.png", title: t("choose.item2") },
    { img: "/images/choose3.png", title: t("choose.item3") },
    { img: "/images/choose4.png", title: t("choose.item4") },
    { img: "/images/choose5.png", title: t("choose.item5") },
    { img: "/images/choose6.png", title: t("choose.item6") },
  ];

  const heading = "O'z ma'lumotlaringizni qoldiring";
  const paragraph =
    "Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi";

  return (
    <div className="relative lg:px-[8rem] lg:py-[5rem] py-10 px-6">
      <h2 className="text-center lg:text-4xl text-2xl font-semibold lg:mb-8">
        {t("choose.heading")}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 lg:mt-[3rem] mt-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-green-100 lg:w-[10rem] lg:h-[10rem] w-[6rem] h-[6rem] rounded-full lg:mb-4 mb-2 flex justify-center items-center">
              <img
                src={item.img}
                alt={item.title}
                className="lg:w-24 lg:h-24 w-16 h-16 object-contain"
              />
            </div>
            <p className="lg:text-lg text-sm font-normal w-[80%]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="lg:px-12 px-8 lg:py-6 py-3 lg:rounded-3xl rounded-lg shadow-md shadow-slate-400 bg-teal-400 text-white
         hover:bg-teal-500 active:scale-95"
          onClick={() => setOpen(true)}
        >
          {t("choose.button")}
        </button>
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

export default Choose;
