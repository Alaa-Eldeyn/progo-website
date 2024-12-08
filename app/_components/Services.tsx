import { services } from "@/data";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { useTranslations } from "next-intl";

function Services() {
  const t = useTranslations();
  return (
    <section id="services" className="pb-28">
      <div className="container max-w-7xl">
        <SectionTitle
          title="Our Services"
          subtitle="Find out what services you provide and what distinguishes them"
          description="We provide programming and design services that meet your needs efficiently and innovatively"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="flex items-center flex-col bg-muted rounded-lg px-5 py-8 min-h-[420px]"
            >
              <div className={`h-[200px] mb-10`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={220}
                  height={220}
                  className={`w-full h-full object-cover  ${
                    i == 1 && "!h-[125%]"
                  }`}
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">{t(service.title)}</h3>
                <p className="text-md sm:text-lg text-[#A9A9A9]">
                  {t(service.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
