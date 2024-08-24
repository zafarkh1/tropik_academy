import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../utils/Button";
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

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [open]);

  return (
    <div className="relative md:px-[8rem] md:py-[5rem] py-10">
      <h2 className="text-center md:text-4xl text-2xl font-semibold mb-10">
        {t("choose.heading")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-[5rem]">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-green-100 w-[10rem] h-[10rem] p-1 rounded-full mb-4 flex justify-center items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
            </div>
            <p className="text-lg font-normal px-12">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button
          title={t("choose.button")}
          padding="1.5rem 5rem"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Choose;
