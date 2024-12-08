"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Logo from "../Logo";
import close from "../../assets/Close_round.svg";

export function Modal({
  isOpen,
  onClose,
  imageSrc,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | StaticImageData;
  title?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-muted rounded-xl shadow-lg w-[90vw] max-w-[1200px] h-[80vh] md:h-[90vh] overflow-hidden cursor-default relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="backdrop-blur-sm bg-black/30 left-0 w-full h-24 absolute top-0 center">
              <div className="flex items-center justify-between py-4 w-[85%] md:w-[70%] gap-5 z-50 px-8 bg-muted rounded-2xl h-20">
                <div className="hidden md:block">
                  <Logo />
                </div>
                <div>
                  <h3 className="text-white md:text-center md:text-xl font-semibold">
                    {title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className=""
                >
                  <Image
                    src={close}
                    width={35}
                    height={35}
                    alt="Close"
                    className="cursor-pointer bg-primary rounded-lg p-1 w-8"
                  />
                </button>
              </div>
            </div>
            <div className="h-full overflow-y-scroll no_scroll_bar">
              <Image
                src={imageSrc}
                alt="Preview Project"
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
