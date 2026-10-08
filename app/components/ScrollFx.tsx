"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll("[data-reveal]:not(.in-view)")
      .forEach((el) => revealIo.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealIo.disconnect();
    };
  }, [pathname]);

  return null;
}
