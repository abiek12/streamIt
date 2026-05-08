import { PlusIcon, XIcon } from "@phosphor-icons/react";
import { FAQ_DUMMY } from "../utils/dummyData";
import { useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState(FAQ_DUMMY);

  const toggleItem = (index) => {
    const updatedFaq = faq.map((item, idx) => ({
      ...item,
      state: idx === index ? !item.state : false,
    }));

    setFaq(updatedFaq);
  };

  return (
    <div className="faq">
      <h1 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <div className="">
        {
          <ul className="flex flex-col gap-2">
            {faq.map((i, idx) => (
              <div className="flex flex-col">
                <button onClick={() => toggleItem(idx)}>
                  <li className="px-6 py-7 bg-surface-2 text-2xl cursor-pointer hover:bg-border flex justify-between items-center">
                    {i.question}
                    {i.state ? <XIcon size={32} /> : <PlusIcon size={32} />}
                  </li>
                </button>

                {i.state && (
                  <div className="px-6 py-7 cursor-default bg-surface-2 text-xl">
                    <p>{i.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Faq;
