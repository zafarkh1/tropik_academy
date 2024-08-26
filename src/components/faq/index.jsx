import { useState } from "react";
import { useTranslation } from "react-i18next";

function Faq() {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      question: t("faqs.question1"),
      answer: t("faqs.answer1"),
    },
    {
      id: 2,
      question: t("faqs.question2"),
      answer: t("faqs.answer2"),
    },
    {
      id: 3,
      question: t("faqs.question3"),
      answer: t("faqs.answer3"),
    },
    {
      id: 4,
      question: t("faqs.question4"),
      answer: t("faqs.answer4"),
    },
    {
      id: 5,
      question: t("faqs.question5"),
      answer: t("faqs.answer5"),
    },
  ];

  const handleAccordion = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div id="faq" className="lg:my-16 md:my-8 my-5">
      <h2 className="lg:text-5xl text-2xl font-bold text-center lg:mb-10">
        {t("faqs.heading")}
      </h2>
      <div className="xl:px-40 space-y-4 p-6">
        {data.map((item) => (
          <div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center lg:text-xl bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer lg:p-5 p-3 py-4"
              onClick={() => handleAccordion(item.id)}
            >
              <p className="font-medium lg:text-xl">{item.question}</p>
              <span className="text-gray-600 lg:text-xl text-lg ml-3">
                {selected === item.id ? "-" : "+"}
              </span>
            </div>
            <div
              className={`lg:text-xl overflow-hidden transition-all duration-1000 ease-in ${
                selected === item.id ? "max-h-screen opacity-100" : "max-h-0"
              }`}
            >
              <div className="lg:p-5 p-3 py-4 text-left text-gray-700 bg-gray-50">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
