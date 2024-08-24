import { Link } from "react-scroll";
import Button from "../../utils/Button";
import { useTranslation } from "react-i18next";

function Showcase(props) {
  const { t } = useTranslation();
  const navbarHeight = 84;

  return (
    <div className="mt-[6rem] md:ml-10 ml-3 relative">
      <div>
        <p className="flex items-center gap-3">
          <img src="/images/Rectangle.png" alt="sa" className="h-[1px] w-10" />
          <span className="lg:text-lg text-sm">{t("showcase.subtitle")}</span>
        </p>
        <h1 className="2xl:leading-[5rem] 2xl:text-6xl xl:leading-[4rem] xl:text-4xl leading-8 text-2xl font-medium xl:w-[64%] w-[90%] lg:my-[3rem] my-6 tracking-wider">
          {t("showcase.title")}
        </h1>
        <div className="sm:flex sm:gap-10 lg:text-lg sm:text-base text-sm ">
          <p className="flex items-center lg:gap-5 gap-3 w-[17rem]">
            <img src="/images/barg1.png" className="lg:h-16 h-10" />
            {t("showcase.benefit1")}
          </p>
          <p className="flex items-center lg:gap-5 gap-3 w-[17rem] md:mt-0 mt-10">
            <img src="/images/barg1.png" className="lg:h-16 h-10" />
            {t("showcase.benefit2")}
          </p>
        </div>
        <div className="mt-5">
          <Link
            to={"courses"}
            spy={true}
            smooth={true}
            offset={-navbarHeight}
            duration={1500}
            href={"courses"}
          >
            <button className="lg:px-10 px-6 lg:py-6 py-3 lg:rounded-3xl rounded-lg shadow-md shadow-slate-400 bg-teal-400 text-white hover:bg-teal-500 active:scale-95">
              {t("showcase.buttonText")}
            </button>
          </Link>

          <p className="mt-3 ml-4">{t("showcase.promoText")}</p>
        </div>
      </div>
      {/* <div className="xl:absolute xl:top-0 xl:right-0 hidden xl:block">
        <img src="/images/showcase.png" alt="showcase" />
      </div> */}
    </div>
  );
}

export default Showcase;
