import Link from "next/link";
import Image from "next/image";
import facebook from "../assets/facebook-4 1.svg";
import instagram from "../assets/instagram-5 1.svg";
import linkedin from "../assets/linkedin-icon-2 1.svg";
import HeroBg from "./HeroBg";

function Hero() {
  return (
    <section className="relative min-h-[830px] center bg-[#1A1A21] overflow-hidden">
      <HeroBg />
      <div className="text-center container center flex-col space-y-5 z-10 lg:mt-10">
        <h1 className=" text-3xl md:text-6xl font-bold">
          Your Vision, <span className="text-primary">Our Expertise</span>
        </h1>
        <p className="text-2xl md:text-5xl max-w-[700px] !leading-[1.2] text-center">
          We provide you with programming solutions and website and application
          design.
        </p>
        <div className="center gap-5 text-primary ">
          <p>Follow us on </p>
          <hr className="h-[2px] border-none w-20 bg-primary" />
          <Link href="/">
            <Image src={facebook} width={20} height={20} alt="Facebook"></Image>
          </Link>
          <Link href="/">
            <Image
              src={instagram}
              width={20}
              height={20}
              alt="Instagram"
            ></Image>
          </Link>
          <Link href="/">
            <Image src={linkedin} width={20} height={20} alt="Linkedin"></Image>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
