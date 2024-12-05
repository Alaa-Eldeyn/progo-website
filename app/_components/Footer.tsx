import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="container rounded-3xl bg-muted text-white py-10 md:px-20">
      <div className=" max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/2">
          <Logo />
          <p className="text-gray-400 text-sm my-6">
            A software development company specializing in providing innovative
            and customized solutions to meet clients' needs, including designing
            and developing applications and websites, as well as creating
            integrated business systems. We strive to deliver quality and
            efficiency to ensure the success of our clients' projects.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] mb-1.5 bg-white rounded-lg" />
            <p className="font-semibold mb-4">Connect with us :</p>
          </div>
          <div className="flex justify-start space-x-4">
            {socialMedia.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:bg-black/10 soft size-10 center p-3 bg-black/40 rounded-xl"
              >
                <Image src={item.icon} alt={item.name} width={25} height={25} />
              </Link>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-5">
          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-">Site Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white">Home</li>
              <li className="hover:text-white">Services</li>
              <li className="hover:text-white">About us</li>
              <li className="hover:text-white">Portfolio</li>
              <li className="hover:text-white">Blog</li>
              <li className="hover:text-white">Our Team</li>
              <li className="hover:text-white">Contact</li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white">UI/UX Design</li>
              <li className="hover:text-white">Website Development</li>
              <li className="hover:text-white">Application Development</li>
              <li className="hover:text-white">Project Management</li>
              <li className="hover:text-white">Website & App Testing</li>
              <li className="hover:text-white">Project Development</li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-">Product</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white">Figma</li>
              <li className="hover:text-white">Adobe</li>
              <li className="hover:text-white">Dribbble</li>
              <li className="hover:text-white">Behance</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-none bg-gray-400 h-[1px] my-5" />
      <div className="center">
        &copy; {new Date().getFullYear()} - Progo team
      </div>
    </footer>
  );
};

export default Footer;
