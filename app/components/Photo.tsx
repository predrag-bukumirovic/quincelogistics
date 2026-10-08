import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  ratio?: string;
  className?: string;
};

export default function Photo({
  src,
  alt,
  sizes,
  ratio = "4 / 3",
  className = "",
}: Props) {
  return (
    <div
      className={`photo ${className}`}
      style={{ "--ratio": ratio } as CSSProperties}
      data-reveal
    >
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" />
    </div>
  );
}
