import { values } from "@/data";
import Image from "next/image";

function Values() {
  return (
    <section id="" className="pt-12 pb-24">
      <div className="container center flex-col">
        <h1 className="text-5xl font-bold relative w-fit">
          <span className="relative z-10">Our values</span>
          <span className="absolute  bottom-2 z-0  right-0 bg-primary w-32 h-3"></span>
        </h1>
        <p className="mt-4 text-lg lg:text-3xl">
          The Heart and Values Driving Our Journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-12 max-w-7xl">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex gap-5 p-8 bg-muted items-start rounded-xl"
            >
              <div className="bg-[#FFEDEF] p-5 rounded-lg w-16 h-16 center">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={50}
                  height={50}
                  className="size-10"
                />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-400 line-clamp-[8] lg:line-clamp-3">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Values;
