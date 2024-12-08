import { navItems, services, socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="container rounded-3xl bg-muted text-white py-10 md:px-20 sm:mb-10">
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/2">
          <Logo />
          <p className="text-gray-400 text-sm my-6">
            {t(
              "A software development company specializing in providing innovative and customized solutions to meet clients' needs, including designing and developing applications and websites, as well as creating integrated business systems, We strive to deliver quality and efficiency to ensure the success of our clients' projects"
            )}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] mb-1.5 bg-white rounded-lg" />
            <p className="font-semibold mb-4">{t("Connect with us :")}</p>
          </div>
          <div className="flex justify-start gap-4">
            {socialMedia.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:!bg-primary soft size-10 center p-3 bg-black/40 rounded-xl"
              >
                <Image src={item.icon} alt={item.name} width={25} height={25} />
              </Link>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-">{t("Site Links")}</h3>
            <ul className="text-gray-400 space-y-2">
              {navItems.map((item) => (
                <li key={item.name} className="hover:text-white">
                  <Link href={item.link}>{t(item.name)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-">{t("Services")}</h3>
            <ul className="text-gray-400 space-y-2">
              {services.map((item) => (
                <li key={item.title} className="hover:text-white">
                  {t(item.title)}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-">{t("Product")}</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white">{t("Figma")}</li>
              <li className="hover:text-white">{t("Adobe")}</li>
              <li className="hover:text-white">{t("Dribbble")}</li>
              <li className="hover:text-white">{t("Behance")}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-none bg-gray-400 h-[1px] my-5" />
      <div className="center">
        &copy; {new Date().getFullYear()} - {t("Progo team")}
      </div>
    </footer>
  );
};

export default Footer;
