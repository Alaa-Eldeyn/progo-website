import Image from "next/image";
import dots from "../assets/dots.svg";
import about from "../assets/about.svg";
import { useTranslations } from "next-intl";

function About() {
  const t = useTranslations();
  return (
    <section id="about" className="relative center py-10 md:pb-20">
      <div className="container center gap-14 flex-col lg:flex-row">
        <div className="relative">
          <div className="absolute ltr:-left-1/2 translate-x-1/2 lg:-bottom-16 w-80 -z-10 hidden md:block">
            <Image src={dots} alt="dots" width={500} height={500} />
          </div>
          <Image src={about} alt="about" width={600} height={600} priority />
        </div>
        <div className="space-y-4 flex-1 max-w-lg lg:mt-32">
          <p className=" bg-[rgba(234,64,84,0.1)] px-4 py-1 rounded-full text-primary w-fit">
            {t("About Us")}
          </p>
          <h1 className="text-4xl font-bold">{t("Freelance team software")}</h1>
          <p className="text-[#C8C8C8] leading-relaxed">
            {t(
              "Progo is a team of experienced software engineers specializing in designing and developing custom software solutions, including websites, mobile applications, and enterprise management systems, The team excels in delivering innovative and advanced software solutions tailored to meet clients' needs and help them achieve their goals efficiently and effectively"
            )}
          </p>
          <h2 className=" text-3xl font-bold">
            {t("Your Vision,")}{" "}
            <span className="text-primary">{t("Our Expertise")}</span>
          </h2>
          <button className="px-8 py-3 rounded-full bg-primary">
            {t("Read more")}
          </button>
        </div>
      </div>
    </section>
  );
}
export default About;
