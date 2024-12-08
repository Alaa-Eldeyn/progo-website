import Image from "next/image";
import progo from "../assets/Progo.svg";
import progo_ar from "../assets/Progo-ar.svg";
import { useLocale } from "next-intl";

function Logo() {
  const locale = useLocale();
  return (
    <div>
      {locale === "ar" ? (
        <Image src={progo_ar} width={80} height={50} alt="Logo" priority />
      ) : (
        <Image src={progo} width={80} height={50} alt="Logo" priority />
      )}
    </div>
  );
}
export default Logo;
