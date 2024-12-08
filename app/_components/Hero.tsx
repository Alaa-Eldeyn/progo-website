import Link from "next/link";
import Image from "next/image";
import facebook from "../assets/facebook-4 1.svg";
import instagram from "../assets/instagram-5 1.svg";
import linkedin from "../assets/linkedin-icon-2 1.svg";
import AnimatedBG from "./AnimatedBG";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations();
  return (
    <section className="relative min-h-[700px] max-h-[830px] h-screen center bg-[#1A1A21] overflow-hidden">
      <AnimatedBG />
      <div className="text-center container center flex-col space-y-5 z-10 lg:mt-10">
        <h1 className=" text-3xl md:text-6xl font-bold">
          {t("Your Vision,")}{" "}
          <span className="text-primary">{t("Our Expertise")}</span>
        </h1>
        <p className="text-2xl md:text-5xl max-w-[700px] !leading-[1.2] text-center">
          {t(
            "We provide you with programming solutions and website and application design"
          )}
        </p>
        <div className="center gap-5 text-primary ">
          <p>{t("Follow us on")} </p>
          <hr className="h-[2px] border-none w-20 bg-primary" />
          <Link href="https://www.facebook.com/progo.eg/" target="_blank">
            <Image src={facebook} width={20} height={20} alt="Facebook"></Image>
          </Link>
          <Link href="https://www.instagram.com/progo.eg/" target="_blank">
            <Image
              src={instagram}
              width={20}
              height={20}
              alt="Instagram"
            ></Image>
          </Link>
          <Link
            href="https://www.linkedin.com/company/progosoft-eg"
            target="_blank"
          >
            <Image src={linkedin} width={20} height={20} alt="Linkedin"></Image>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
