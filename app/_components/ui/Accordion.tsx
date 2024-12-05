"use client";
import { ShineBorder } from "./ShineBorder";

const Accordion = ({
  title,
  content,
  index,
  openIndex,
  setOpenIndex,
}: {
  title: string;
  content: string;
  index: number;
  openIndex: number;
  setOpenIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isOpen = openIndex === index;

  return (
    <ShineBorder
      color={["#7D8CB5", "#373D4F"]}
      className={`soft w-full ${isOpen ? "!bg-primary" : "bg-muted"}`}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="flex justify-between items-center w-full p-4 text-start font-medium text-white outline-none"
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden rounded-[16px] text-start soft ${
          isOpen ? "max-h-96 " : "max-h-0"
        }`}
      >
        <div
          className={`p-4 ${isOpen && "pt-0"} !text-background  rounded-[16px]`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </ShineBorder>
  );
};

export default Accordion;
