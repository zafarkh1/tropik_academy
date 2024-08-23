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
    <div className="my-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        {t("faqs.heading")}
      </h2>
      <div className="md:px-40 space-y-4 px-8">
        {data.map((item) => (
          <div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center text-xl bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer p-5"
              onClick={() => handleAccordion(item.id)}
            >
              <p className="font-medium">{item.question}</p>
              <span className="text-2xl text-gray-600">
                {selected === item.id ? "-" : "+"}
              </span>
            </div>
            {selected === item.id && (
              <div className="p-5 text-left text-gray-700 bg-gray-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
