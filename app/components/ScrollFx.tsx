"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => revealIo.observe(el));

    const counterEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]")
    );
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.counter || "0", 10);
          const suffix = el.dataset.counterSuffix || "";
          const duration = 1300;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          counterIo.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counterEls.forEach((el) => counterIo.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealIo.disconnect();
      counterIo.disconnect();
    };
  }, [pathname]);

  return null;
}
