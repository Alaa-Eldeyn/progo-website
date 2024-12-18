import Image from "next/image";
import hero from "@/app/assets/hero.webp";
import hero2 from "@/app/assets/hero2.webp";

function AnimatedBG() {
  return (
    <div className="w-screen h-screen absolute top-0 z-0">
      <Image
        src={hero}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <Image
        src={hero2}
        alt="Background"
        fill
        priority
        className="animate-hero object-cover"
      />
    </div>
  );
}
export default AnimatedBG;
