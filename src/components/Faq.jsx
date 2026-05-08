import { FAQ_DUMMY } from "../utils/dummyData";

const Faq = () => {
  return (
    <div className="faq">
      <h1 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h1>
      <div className="">
        {
          <ul className="flex flex-col gap-2">
            {FAQ_DUMMY.map((i) => (
              <li className="px-6 py-7 bg-surface-2 text-2xl cursor-pointer hover:bg-border">
                {i.question}
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default Faq;
