import Image from "next/image";
import progo from "../assets/Progo.svg";

function Logo() {
  return (
    <div>
      <Image src={progo} width={50} height={50} alt="Logo" />
    </div>
  );
}
export default Logo;
