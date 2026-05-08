import { CaretRightIcon } from "@phosphor-icons/react";

const GetStarted = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h4 className="font-normal">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className="flex w-full gap-2 justify-between items-center">
        <input
          className="border border-solid border-text-muted bg-surface/80 p-3 rounded-sm h-14 w-3/5 flex-none"
          type="text"
          placeholder="Email address"
        />
        <button className="bg-primary hover:bg-primary-dark flex items-center justify-center gap-2 p-3 px-6 h-14 rounded-sm cursor-pointer flex-1">
          <h3 className="text-2xl font-semibold">Get Started</h3>
          <CaretRightIcon size={24} color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
