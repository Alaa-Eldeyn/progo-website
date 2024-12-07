import Image from "next/image";
import progo from "../assets/Progo.svg";

function Logo() {
  return (
    <div>
      <Image src={progo} width={80} height={50} alt="Logo" priority />
    </div>
  );
}
export default Logo;
