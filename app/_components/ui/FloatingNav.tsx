"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
import Image from "next/image";
import SideBar from "../SideBar";
import bars from "../../assets/bars.svg";
import global from "../../assets/Global.svg";
import { useLocale, useTranslations } from "next-intl";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <SideBar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        active={active}
        setActive={setActive}
      />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-7xl w-[90%] md:min-w-[70vw] h-20 fixed z-30 top-5 inset-x-0 mx-auto p-4 !rounded-xl border bg-[#21202A] border-white/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between gap-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
          }}
        >
          <Logo />
          <nav className="hidden lg:flex items-center gap-10 lg:ms-12">
            {navItems.map(
              (
                navItem: {
                  name: string;
                  link: string;
                },
                idx: number
              ) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "text-secondary hover:text-primary soft text-lg !cursor-pointer",
                    active === navItem.name && "text-primary"
                  )}
                  onClick={() => setActive(navItem.name)}
                >
                  <span>{t(navItem.name)}</span>
                </Link>
              )
            )}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={locale === "en" ? "/ar" : "/en"}
              className="flex items-center gap-1"
            >
              <Image src={global} width={20} height={20} alt="language"></Image>
              {locale === "en" ? "Arabic" : "الانجليزية"}
            </Link>
            <Link
              href={"#contact"}
              className="text-sm text-white bg-primary rounded-lg px-4 py-2"
            >
              {t("Contact Us")}
            </Link>
          </div>
          <div
            className="block lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Image src={bars} width={20} height={20} alt="menu"></Image>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
