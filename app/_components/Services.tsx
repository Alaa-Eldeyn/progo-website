import { services } from "@/data";
import Image from "next/image";

function Services() {
  return (
    <section id="services" className="pb-36">
      <div className="container text-center center flex-col gap-4 max-w-7xl">
        <p className="text-primary">Our Services</p>
        <h1 className="text-3xl lg:text-5xl font-bold max-w-3xl">
          Find out what services you provide and what distinguishes them
        </h1>
        <h2 className="text-md lg:text-lg max-w-xl">
          We provide programming and design services that meet your needs
          efficiently and innovatively
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center flex-col bg-muted rounded-lg px-5 py-8 min-h-[420px]"
            >
              <div className="h-[200px] mb-10">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={220}
                  height={220}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-md sm:text-lg text-[#A9A9A9] ">
                  {service.description}
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
