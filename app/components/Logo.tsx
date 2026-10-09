import Image from "next/image";
import logo from "@/public/images/quince-logo.png";

// Isti mali fajl je u zaglavlju, futeru i na izboru jezika, pa se uvek
// učitava odmah — pregledač ga ionako preuzima samo jednom.
export default function Logo() {
  return (
    <Image
      src={logo}
      alt="QuinceLogistics"
      className="logo-img"
      loading="eager"
      unoptimized
    />
  );
}
