"use client";
import { BorderBeam } from "./BorderBeam";

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
    <div className={`soft w-full bg-muted relative rounded-3xl`}>
      <BorderBeam size={150} duration={12} delay={0.1 * index} />
      <button
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="flex justify-between items-center gap-3 w-full p-5 rounded-3xl text-start font-medium text-white outline-none"
      >
        <span className="font-bold text-lg">{title}</span>
        <svg
          className={`!w-10 !h-10 max-w-5 transform transition-transform ${
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
          isOpen ? "max-h-[900px] " : "max-h-0"
        }`}
      >
        <div
          className={`p-5 !pt-0 text-gray-300  rounded-[16px]`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
