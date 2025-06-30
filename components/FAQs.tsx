import { useState } from "react";

const faqs = [
  {
    question: "¿Qué tipo de empresas pueden beneficiarse de los cuadros canvas?",
    answer:
      "Trabajamos con oficinas corporativas, clínicas, agencias de marketing, instituciones educativas y más. Si tu empresa tiene espacios que quieras personalizar con arte de marca, podemos ayudarte.",
  },
  {
    question: "¿Qué necesito para hacer un pedido?",
    answer:
      "Solo necesitas enviarnos una imagen o idea general por WhatsApp. Nosotros nos encargamos de la propuesta, diseño, impresión y entrega.",
  },
  {
    question: "¿Hacen envíos a todo Panamá?",
    answer:
      "Sí, realizamos entregas a nivel nacional. Nuestro equipo logístico garantiza tiempos rápidos y seguros.",
  },
  {
    question: "¿Pueden personalizar cuadros con el logo de mi empresa?",
    answer:
      "Por supuesto. Podemos integrar tu logo, colores corporativos, misión, valores o cualquier diseño institucional que desees.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso de impresión y entrega?",
    answer:
      "El tiempo promedio es de 3 a 5 días hábiles, dependiendo del volumen del pedido y la ubicación.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 focus:outline-none focus:ring"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className="text-2xl text-fuchsia-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}