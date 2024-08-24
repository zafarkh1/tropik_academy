import { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const navbarHeight = 84;

  const list = [
    { title: t("whyUs"), link: "advantages" },
    { title: t("results"), link: "results" },
    { title: t("courses"), link: "courses" },
    { title: t("faq"), link: "faq" },
  ];

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      id="navbar"
      className="w-full fixed top-0 left-0 bg-white shadow-md z-10"
    >
      <div className="md:flex md:justify-between md:items-center md:px-10 px-7 py-4">
        <div className="navbar-logo flex items-center gap-5">
          <a href="">
            <img src="/images/logo.png" alt="logo" className="h-12" />
          </a>
          <p className="w-[12rem] text-sm hidden md:block">{t("logoText")}</p>
        </div>

        <div className="md:hidden">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute top-6 right-8 cursor-pointer transition-transform duration-500 transform"
          >
            {open ? (
              <FaTimes className="transition-opacity duration-300 ease-in-out opacity-100" />
            ) : (
              <GiHamburgerMenu className="transition-opacity duration-300 ease-in-out opacity-100" />
            )}
          </div>
        </div>

        <ul
          className={`md:flex md:items-center lg:gap-10 md:gap-5 bg-white md:static absolute left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {list.map((item, index) => (
            <li
              key={index}
              className="lg:text-xl text-xl md:text-base md:my-0 my-7"
            >
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-navbarHeight} // Adjust offset to account for fixed navbar height
                duration={1500}
                href={item.link}
                className="text-gray-800 hover:text-gray-400 transition-colors duration-500"
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li className="lg:text-xl text-xl md:text-base md:my-0 my-7">
            <a
              href="tel:+998333060098"
              className="text-gray-800 hover:text-gray-400 transition-colors duration-500"
            >
              <p>+998 (33) 306 0098</p>
              <p>{t("connectNow")}</p>
            </a>
          </li>
          <li>
            <select
              onChange={handleChange}
              className="bg-white border border-gray-300 text-gray-800 py-1 px-2 rounded-md"
            >
              <option value="uz">O'zbekcha</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
