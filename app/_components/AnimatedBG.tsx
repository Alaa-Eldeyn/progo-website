import Image from "next/image";
import hero from "@/app/assets/hero.svg";
import hero2 from "@/app/assets/hero2.svg";

function AnimatedBG() {
  return (
    <div className="w-screen h-screen absolute top-0 z-0">
      <Image
        src={hero}
        alt="project2"
        fill
        className="object-cover"
        priority={true}
      />
      <Image
        src={hero2}
        alt="project2"
        fill
        priority={true}
        className="animate-hero object-cover"
      />
    </div>
  );
}
export default AnimatedBG;
