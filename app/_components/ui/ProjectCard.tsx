"use client";
import Image, { StaticImageData } from "next/image";
import lock from "@/app/assets/private.svg";
import { useState } from "react";
import { Modal } from "./Modal";
import { useTranslations } from "next-intl";


function ProjectCard(project: {
  image: string | StaticImageData;
  title: string;
  fullImg: string | StaticImageData
  description: string;
  isPrivate: boolean;
}) {
    const t = useTranslations();

  const { image, fullImg, title, description, isPrivate } = project;
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    imageSrc: string | StaticImageData;
    title?: string;
  }>({
    imageSrc: "",
    title: title,
  });
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={modalData.imageSrc}
        title={modalData.title}
      />
      <div
        className={`bg-muted relative rounded-xl group shadow-lg flex flex-col w-full items-center z-10 border-2 border-transparent hover:border-primary soft cursor-pointer`}
        onClick={() => {
          setModalData({
            imageSrc: fullImg,
            title: t(title),
          });
          if (isPrivate) return;
          setIsOpen(true);
        }}
      >
        <div className="w-full rounded-t-xl relative overflow-hidden">
          <Image
            src={image}
            alt="preview"
            priority
            className="w-full h-full rounded-t-xl group-hover:scale-105 soft"
          />
          {isPrivate && (
            <div className="w-full h-full center rounded-t-xl soft bg-black/50 absolute top-0 left-0">
              <button className="px-5 py-2 bg-[#23293A] rounded-xl center gap-2 border border-gray-500 text-sm">
                <Image
                  src={lock}
                  alt="lock"
                  width={15}
                  height={15}
                  className="soft"
                />
                <span>{t("Private")}</span>
              </button>
            </div>
          )}
        </div>
        <div className="text-start w-full p-4">
          <h4 className="text-xl font-semibold text-white tracking-wide group-hover:text-primary soft">
            {t(title)}
          </h4>
          <p className="text-[10px] 2xl:text-[13px] text-[#868490] soft group-hover:text-white">
            {t(description)}
          </p>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
