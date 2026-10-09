"use client";

import Script from "next/script";
import { useConsent } from "./useConsent";
import { GA_ID } from "../lib/consent";

// Google Analytics 4 — učitava se samo uz pristanak i samo ako je GA_ID podešen.
export default function Analytics() {
  const consent = useConsent();
  if (!GA_ID || !consent?.analytics) return null;

  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
