import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollFx from "./components/ScrollFx";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Karapandžić d.o.o. — Transport i Logistika",
  description:
    "Karapandžić d.o.o. — pouzdana logistička i transportna rešenja: drumski, vazdušni i pomorski transport uz AI praćenje pošiljki i podršku 24/7.",
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
    <html lang="sr" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ScrollFx />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
