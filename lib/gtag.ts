// lib/gtag.ts

export const GA_TRACKING_ID = "G-HD320PV3C3";

// Enviar pageview manual (por si en el futuro lo usas con router.push, etc.)
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};