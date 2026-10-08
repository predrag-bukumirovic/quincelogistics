import Image from "next/image";
import logo from "@/public/images/quince-logo.png";
import logoWhite from "@/public/images/quince-logo-white.png";

type Props = {
  onDark?: boolean;
  eager?: boolean;
};

export default function Logo({ onDark = false, eager = false }: Props) {
  return (
    <Image
      src={onDark ? logoWhite : logo}
      alt="QuinceLogistics"
      className="logo-img"
      loading={eager ? "eager" : "lazy"}
      unoptimized
    />
  );
}
