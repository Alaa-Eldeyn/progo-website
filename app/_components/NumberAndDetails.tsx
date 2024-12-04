import { numbersAndDetails } from "@/data";
import Image from "next/image";

function NumberAndDetails() {
  return (
    <section className="bg-muted py-12 px-8 min-h-48 center">
      <div className="container center gap-16 flex-wrap">
        {numbersAndDetails.map((item) => (
          <div key={item.id} className="flex gap-5 min-w-52">
            <div className="size-12">
              <Image src={item.icon} alt="sec" width={64} height={64} />
            </div>
            <div>
              <h2 className="text-lg font-bold">{item.number}</h2>
              <p className="uppercase text-sm text-[#A9A9A9]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default NumberAndDetails;
