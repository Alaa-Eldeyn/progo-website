"use client";
import { navItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import close from "../assets/Close_round.svg";
import global from "../assets/Global.svg";
import { useLocale, useTranslations } from "next-intl";

function SideBar({
  isOpen,
  setIsOpen,
  active,
  setActive,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  active: string;
  setActive: (active: string) => void;
}) {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/50 soft overflow-hidden ${
          isOpen ? "opacity-1 cursor-pointer z-40" : "opacity-0 -z-40"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`w-72 fixed flex flex-col top-0 bg-[#17171D] -right-full gap-5 h-screen soft z-50 p-5 ${
          isOpen ? "!right-0" : "-!right-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="self-end ">
          <Image
            src={close}
            width={35}
            height={35}
            alt="Close"
            className="cursor-pointer bg-black/50 rounded-lg p-1 "
          />
        </button>
        <nav className=" flex flex-col gap-3">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={`text-white hover:text-primary py-3 px-6 rounded-lg w-full bg-[#21202A] soft text-lg !cursor-pointer,
                ${active === navItem.name && "text-primary"}`}
              onClick={() => {
                setActive(navItem.name);
                setIsOpen(false);
              }}
            >
              <span>{t(navItem.name)}</span>
            </Link>
          ))}
          <hr className="bg-[#21202A] mt-3 border-none h-0.5" />

          <Link
            href={"#contact"}
            className="text-lg text-white bg-primary rounded-lg px-4 py-3 text-center"
            onClick={() => setIsOpen(false)}
          >
            {t("Contact Us")}
          </Link>
          <button className="center gap-1 text-white hover:text-primary py-3 px-6 rounded-lg w-full bg-[#21202A] soft text-lg !cursor-pointer ">
            <Link
              href={locale === "en" ? "/ar" : "/en"}
              className="flex items-center gap-1"
              onClick={() => setIsOpen(false)}
            >
              <Image src={global} width={20} height={20} alt="language"></Image>
              {locale === "en" ? "Arabic" : "الانجليزية"}
            </Link>
          </button>
        </nav>
      </div>
    </>
  );
}
export default SideBar;
