import { solutions } from "@/data";
import Image from "next/image";

function BentoGrid() {
  return (
    <section className="pt-24 pb-32">
      <div className="container text-center center flex-col gap-4 max-w-7xl">
        <p className="text-primary">
          Innovating Solutions, Delivering Excellence
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold max-w-3xl">
          Choose PROGO for Innovation and Excellence
        </h1>
        <h2 className="text-md lg:text-lg max-w-xl">
          We provide programming and design services that meet your needs
          efficiently and innovatively
        </h2>
        <div className="grid grid-cols-12 lg:grid-rows-3 gap-5 w-full">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 flex flex-col gap-5 ${item.colSpan} bg-muted min-h-[350px] ${item.rowStart}`}
            >
              <div className="h-[200px] mb-3">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={220}
                  height={220}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BentoGrid;
