import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";

function Footer(props) {
  const { t } = useTranslation();

  const items = [
    { title: t("whyUs"), link: "/" },
    { title: t("results"), link: "/" },
    { title: t("courses"), link: "/" },
    { title: t("faq"), link: "/" },
  ];

  const socialMedia = [
    { icon: <FaInstagram />, link: "/" },
    { icon: <PiTelegramLogoLight />, link: "/" },
    { icon: <RiYoutubeLine />, link: "/" },
    { icon: <LuPhone />, link: "/" },
  ];

  return (
    <footer className="bg-gray-800 text-white rounded-2xl mb-4 mx-4 md:mx-16 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/logo_footer.svg"
            alt="Logo"
            className="h-20 md:h-auto"
          />
        </div>
        <ul className="flex justify-center md:justify-center gap-6 md:gap-12 text-sm md:text-lg">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center md:justify-end gap-6 text-lg md:text-2xl">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
