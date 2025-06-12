"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white text-sm px-4 py-3 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="mb-2 md:mb-0">
        Utilizamos cookies para mejorar tu experiencia en el sitio. Al continuar, aceptas nuestra{" "}
        <a href="/politica-privacidad" className="underline hover:text-fuchsia-300">
          política de privacidad
        </a>.
      </p>
      <button
        onClick={handleAccept}
        className="bg-[#BA007C] hover:bg-[#a0006d] text-white font-semibold px-4 py-2 rounded"
      >
        Aceptar
      </button>
    </div>
  );
}