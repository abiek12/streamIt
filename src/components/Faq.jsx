import { PlusIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { t } = useTranslation();

  const faqItems = t("home.faq.items", {
    returnObjects: true,
  });

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq">
      <h1 className="text-2xl font-semibold mb-4">{t("home.faq.title")}</h1>

      <ul className="flex flex-col gap-2">
        {faqItems.map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => toggleItem(idx)}
              className="w-full px-6 py-7 bg-surface-2 text-2xl hover:bg-border flex justify-between items-center"
            >
              {item.question}

              {activeIndex === idx ? (
                <XIcon size={32} />
              ) : (
                <PlusIcon size={32} />
              )}
            </button>

            {activeIndex === idx && (
              <div className="px-6 py-7 bg-surface-2 text-xl">
                <p>{item.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
