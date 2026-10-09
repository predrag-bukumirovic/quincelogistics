import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import ScrollFx from "./components/ScrollFx";
import Header from "./components/Header";
import Footer from "./components/Footer";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "QuinceLogistics — Drumski transport robe",
    template: "%s — QuinceLogistics",
  },
  description:
    "QuinceLogistics — domaći i međunarodni drumski transport robe. Kompletni (FTL) i zbirni (LTL) utovari za Srbiju, region i EU, uz jednog dispečera za celu turu.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={barlow.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#sadrzaj" className="skip-link">
          Preskoči na sadržaj
        </a>
        <ScrollFx />
        <Header />
        <main id="sadrzaj">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
