import Image from "next/image";
import { Marquee } from "./ui/Marquee";
import { companies } from "@/data";

function Companies() {
  return (
    <section className="bg-muted py-4 px-8 z-20 h-24 center">
      <Marquee pauseOnHover className="[--duration:20s] container center">
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            width={150}
            height={50}
            className="ml-3 sm:ml-10"
          />
        ))}
      </Marquee>
    </section>
  );
}
export default Companies;
