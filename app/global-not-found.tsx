import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Logo from "./components/Logo";
import { barlow } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Stranica ne postoji — QuinceLogistics",
  robots: { index: false, follow: false },
};

// Nepostojeće adrese ne pripadaju nijednom jeziku, pa je poruka na svim.
export default function GlobalNotFound() {
  return (
    <html lang="sr" className={barlow.variable}>
      <body>
        <main className="not-found">
          <div className="wrap">
            <Link href="/" className="logo" aria-label="QuinceLogistics">
              <Logo />
            </Link>
            <h1 className="page-title">Stranica ne postoji.</h1>
            <p className="lead">
              Adresa je pogrešna ili je stranica premeštena.
            </p>
            <p className="lead" lang="en">
              Page not found — the address is wrong or the page has moved.
            </p>
            <p className="lead" lang="de">
              Seite nicht gefunden – die Adresse ist falsch oder die Seite wurde
              verschoben.
            </p>
            <div className="hero-actions">
              <Link href="/" className="btn btn-primary">
                Na početnu
              </Link>
              <Link href="/en" className="btn btn-line" lang="en">
                English site
              </Link>
              <Link href="/de" className="btn btn-line" lang="de">
                Deutsche Website
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
