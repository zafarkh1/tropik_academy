import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

function Results(props) {
  const { t } = useTranslation();

  const url = "/images/result.png";
  const repeatedImg = Array(10).fill(url);

  return (
    <div id="results" className="lg:py-8 ">
      <h2 className="lg:text-4xl text-2xl px-6 text-center font-semibold">
        {t("result.heading")}
      </h2>

      <div className="relative lg:mt-10 mt-8">
        <Marquee className="w-screen absolute left-0">
          {repeatedImg.map((item, index) => (
            <img key={index} src={item} alt={item} className="mx-6" />
          ))}
        </Marquee>
      </div>

      <div className="relative mt-10">
        <Marquee direction="right" className="w-screen absolute left-0">
          {repeatedImg.map((item, index) => (
            <img key={index} src={item} alt={item} className="mx-6" />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Results;
