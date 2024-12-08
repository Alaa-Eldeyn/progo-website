import Image from "next/image";
import email from "@/app/assets/Envelope.svg";
import phone from "@/app/assets/Group 1410094688.svg";
import location from "@/app/assets/MapPinLine.svg";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { socialMedia } from "@/data";
import { useTranslations } from "next-intl";

function ContactUs() {
  const t = useTranslations();
  return (
    <div id="contact" className="container pb-24">
      <h1 className="text-3xl lg:text-5xl font-bold max-w-[51rem] mx-auto text-center mb-10">
        {t("You have a project in Your mind! Contact us now")}
      </h1>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white text-white rounded-2xl">
        {/* Left Section */}
        <div className="md:w-1/3 bg-primary py-14 px-7 gap-10 md:gap-5 rounded-t-2xl md:rounded-l-2xl rtl:md:rounded-r-2xl rtl:md:rounded-l-none md:rounded-tr-none text-center md:text-start flex justify-between flex-col">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold !mb-8">{t("Get in touch")}</h2>
            <div className="flex items-center gap-3">
              <div className="size-12 center p-2 bg-white/10 rounded-full">
                <Image src={email} alt="email" width={25} height={25} />
              </div>
              <div className="flex-1 text-start text-md">
                <p className=" opacity-50 text-xs uppercase">{t("Email us")}</p>
                <Link href="mailto:progosoft.info@gmail.com">
                  progosoft.info@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-12 center p-2 bg-white/10 rounded-full">
                <Image src={phone} alt="phone number" width={25} height={25} />
              </div>
              <div className="flex-1 text-start text-md">
                <p className=" opacity-50 text-xs uppercase">
                  {t("Phone Number")}
                </p>
                <Link href="https://wa.me/+201004894245">+201004894245</Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-12 center p-2 bg-white/10 rounded-full">
                <Image src={location} alt="location" width={25} height={25} />
              </div>
              <div className="flex-1 text-start text-md">
                <p className=" opacity-50 text-xs uppercase">{t("Address")}</p>
                <p>{t("Eldoqi - Hadaiq Elahram")}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] mb-1.5 bg-white rounded-lg" />
              <p className="font-semibold mb-2">{t("Connect with us :")}</p>
            </div>
            <div className="flex justify-start gap-4">
              {socialMedia.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="hover:bg-white/30 soft size-10 center p-2 bg-white/10 rounded-xl"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={25}
                    height={25}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 p-8 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
