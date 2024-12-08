"use client";
import { useState } from "react";
import Accordion from "./ui/Accordion";
import { faq } from "@/data";
import { useTranslations } from "next-intl";

function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const t = useTranslations();
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4 center flex-col pb-24">
      <div className="container max-w-7xl text-center">
        <h1 className="text-3xl sm:text-5xl font-bold relative w-fit mx-auto">
          <span className="relative z-10">
            {t("Frequently asked questions")}
          </span>
          <span className="absolute  bottom-2 z-0  left-1 bg-primary w-[130px] sm:w-[215px] h-1.5 sm:h-3"></span>
        </h1>
        <p className="my-2 sm:mt-4 text-lg text-[#B4BBC5]">
          {t("If you have any other questions, you can contact me by email")}
        </p>
        <div className="space-y-4 mt-5 lg:mt-10">
          {faq.map((item) => (
            <Accordion
              key={item.id}
              index={item.id}
              title={t(item.question)}
              content={t.raw(item.answer)}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
