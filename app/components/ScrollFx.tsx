"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFx() {
  const pathname = usePathname();
  const lastPath = useRef(pathname);
  const historyPath = useRef<string | null>(null);

  // Nazad/napred: pregledač sam vraća zatečenu poziciju, pa je ne diramo.
  useEffect(() => {
    const onPop = () => {
      historyPath.current = window.location.pathname;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Nova strana uvek počinje od samog vrha. Next.js sam ne skroluje
  // kada je prethodna strana bila tek malo pomerena.
  useLayoutEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    const fromHistory = historyPath.current === pathname;
    historyPath.current = null;
    if (fromHistory || window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Animira se samo ono što tek ulazi u ekran. Elementi koji su već
    // vidljivi (npr. posle osvežavanja na sredini strane) se ne pomeraju.
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add("reveal-pending");
        revealIo.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealIo.disconnect();
    };
  }, [pathname]);

  return null;
}
