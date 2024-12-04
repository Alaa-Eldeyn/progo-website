import Image from "next/image";
import inova from "../assets/Group 1410094634.svg";
import alarm from "../assets/Group 1410094635.svg";
import libyaZone from "../assets/Vector-2.svg";
import suq from "../assets/Vector-1.svg";
import sk from "../assets/Vector.svg";
import sec from "../assets/white Logo 1 2.svg";

function Companies() {
  return (
    <section className="bg-muted py-4 px-8 h-24 center">
      <div className="container center gap-10">
        <Image src={sec} alt="sec" width={150} height={50} />
        <Image src={sk} alt="sk" width={150} height={50} />
        <Image src={suq} alt="companies" width={150} height={50} />
        <Image src={libyaZone} alt="libyaZone" width={150} height={50} />
        <Image src={alarm} alt="alarm" width={150} height={50} />
        <Image src={inova} alt="inova" width={150} height={50} />
      </div>
    </section>
  );
}
export default Companies;
