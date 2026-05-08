import { PlusIcon } from "@phosphor-icons/react";
import { FAQ_DUMMY } from "../utils/dummyData";

const Faq = () => {
  const toggleItem = (item) => {
    console.log(item);
  };

  return (
    <div className="faq">
      <h1 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <div className="">
        {
          <ul className="flex flex-col gap-2">
            {FAQ_DUMMY.map((i) => (
              <button onClick={() => toggleItem(i)}>
                <li className="px-6 py-7 bg-surface-2 text-2xl cursor-pointer hover:bg-border flex justify-between items-center">
                  {i.question}
                  <PlusIcon size={32} />
                </li>
              </button>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Faq;
