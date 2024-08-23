import Button from "../../utils/Button";
import { useTranslation } from "react-i18next";

function Showcase(props) {
  const { t } = useTranslation();

  return (
    <div
      className="mt-[6rem] md:ml-10 ml-3 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/showcase.png")',
      }}
    >
      <div>
        <p className="flex items-center gap-3">
          <img src="/images/Rectangle.png" alt="sa" className="h-[1px] w-10" />
          <span className="text-lg">{t("showcase.subtitle")}</span>
        </p>
        <h1 className="lg:leading-[6rem] lg:text-6xl leading-[3rem] text-4xl md:w-[70%] w-[90%] my-[3rem]  tracking-wider">
          {t("showcase.title")}
        </h1>
        <div className="md:flex md:gap-10 text-lg ">
          <p className="flex items-center gap-5 w-[17rem]">
            <img src="/images/barg1.png" className="h-16" />
            {t("showcase.benefit1")}
          </p>
          <p className="flex items-center gap-5 w-[17rem] md:mt-0 mt-10">
            <img src="/images/barg1.png" className="h-16" />
            {t("showcase.benefit2")}
          </p>
        </div>
        <div className="mt-5">
          <Button
            title={t("showcase.buttonText")}
            padding="1.5rem 1.8rem"
          ></Button>
          <p className="mt-3 ml-4">{t("showcase.promoText")}</p>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
