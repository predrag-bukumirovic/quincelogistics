import Image from "next/image";
import logo from "@/public/images/quince-logo.png";

type Props = {
  eager?: boolean;
};

export default function Logo({ eager = false }: Props) {
  return (
    <Image
      src={logo}
      alt="QuinceLogistics"
      className="logo-img"
      loading={eager ? "eager" : "lazy"}
      unoptimized
    />
  );
}
