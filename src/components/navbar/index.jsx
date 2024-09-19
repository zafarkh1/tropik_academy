import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  const navbarHeight = 84;
  const myLang = localStorage.getItem("i18nextLng");

  const list = [
    { title: t("whyUs"), link: "advantages" },
    { title: t("results"), link: "results" },
    { title: t("courses"), link: "courses" },
    { title: t("faq"), link: "faq" },
  ];

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className="w-full fixed top-0 left-0 bg-white shadow-md z-10"
    >
      <div className="lg:flex lg:justify-between lg:items-center lg:px-10 px-7 py-4">
        <div className="navbar-logo flex items-center gap-5">
          <a href="showcase">
            <img src="/images/logo.png" alt="logo" className="h-12" />
          </a>
          <p className="w-[12rem] text-sm hidden lg:block">{t("logoText")}</p>
        </div>

        <div className="lg:hidden">
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
          className={`lg:flex lg:items-center lg:gap-10 bg-white lg:static absolute left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] opacity-0 lg:opacity-100"
          }`}
        >
          {list.map((item, index) => (
            <li key={index} className="lg:text-xl text-base lg:my-0 my-4">
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-navbarHeight}
                duration={1500}
                href={item.link}
                className="text-gray-800 lg:hover:text-gray-400 transition-colors duration-500"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}

          <li className="lg:text-xl text-base lg:my-0 my-4">
            <a
              href="tel:+998333060098"
              className="text-gray-800 lg:hover:text-gray-400 transition-colors duration-500"
            >
              <p>+998 (33) 306 0098</p>
              <p>{t("connectNow")}</p>
            </a>
          </li>
          <li className="lg:mb-0 mb-4">
            <select
              onChange={handleChange}
              className="lg:text-xl text-base bg-white border border-gray-300 text-gray-800 outline-none py-1 px-2 rounded-lg cursor-pointer"
              value={myLang}
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
