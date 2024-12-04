"use client";
import Link from "next/link";
import HeroBG from "./HeroBG";
import { useEffect, useState } from "react";
import Image from "next/image";
import facebook from "../assets/facebook-4 1.svg";
import instagram from "../assets/instagram-5 1.svg";
import linkedin from "../assets/linkedin-icon-2 1.svg";

const colors: string[] = ["#2A2A2A", "#ea4054b7"];
const INTERVAL_DURATION = 3000;

function Hero() {
  const [color, setColor] = useState<string>(colors[0]);

  useEffect(() => {
    let currentColorIndex = 0;
    const interval = setInterval(() => {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      setColor(colors[currentColorIndex]);
    }, INTERVAL_DURATION);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-[700px] center bg-[#1A1A21]">
      <HeroBG fill={color} />
      <div className="text-center container center flex-col space-y-4 lg:mt-4">
        <h1 className=" text-3xl md:text-[40px] font-bold">
          Your Vision, <span className="text-primary">Our Expertise</span>
        </h1>
        <p className="text-2xl md:text-[40px] max-w-[580px] leading-tight text-center">
          We provide you with programming solutions and website and application
          design.
        </p>
        <div className="center gap-5 text-primary !mt-5">
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
