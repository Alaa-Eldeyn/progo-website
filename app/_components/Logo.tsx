import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image src="/progo.svg" width={50} height={50} alt="Logo" />
    </div>
  );
}
export default Logo;
