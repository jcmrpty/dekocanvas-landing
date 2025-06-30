
export const metadata = {
  title: "Cuadros Canvas Corporativos Personalizados | Dekocanvas Panamá",
  description:
    "Transforma oficinas, clínicas y espacios empresariales con cuadros canvas personalizados que elevan tu marca. Impresión premium, entrega rápida y atención por WhatsApp.",
  keywords: [
    "cuadros canvas",
    "arte corporativo",
    "cuadros personalizados empresa",
    "impresión canvas Panamá",
    "regalos institucionales",
    "arte de marca"
  ],
  alternates: {
    canonical: "https://dekocanvas-landing.vercel.app/empresas"
  }
};
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FAQs from "@/components/FAQs"
import {
  Star,
  Truck,
  Palette,
  Users,
  Clock,
  MessageCircle,
  Mail,
  Instagram,
  Facebook
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DekocanvasLanding() {
 const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tipo de empresas pueden beneficiarse de los cuadros canvas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con oficinas corporativas, clínicas, agencias de marketing, instituciones educativas y más. Si tu empresa tiene espacios que quieras personalizar con arte de marca, podemos ayudarte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué necesito para hacer un pedido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo necesitas enviarnos una imagen o idea general por WhatsApp. Nosotros nos encargamos de la propuesta, diseño, impresión y entrega."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen envíos a todo Panamá?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos entregas a nivel nacional. Nuestro equipo logístico garantiza tiempos rápidos y seguros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden personalizar cuadros con el logo de mi empresa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por supuesto. Podemos integrar tu logo, colores corporativos, misión, valores o cualquier diseño institucional que desees."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda el proceso de impresión y entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo promedio es de 3 a 5 días hábiles, dependiendo del volumen del pedido y la ubicación."
      }
    }
  ]
}
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
></script>

<div className="bg-[#BA007C] text-white text-sm text-center py-2 px-4 font-medium">
  🎉 Promoción: 10% de descuento en tu primer pedido •{" "}
  
  {/* ¿Dónde puedo hacer mi pedido de cuadros canvas en Panamá por WhatsApp? */}
  <a
    href="https://wa.me/50760524116"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-gray-100"
  >
    HAZ TU PEDIDO AHORA
  </a>
</div>

  {/* Contenido principal del header */}
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo e Instagram */}
    <div className="flex items-center space-x-3">
      <Image
        src="/images/dekocanvaslogo.jpeg"
        alt="Dekocanvas Logo"
        width={160}
        height={160}
        className="rounded-full"
      />

      <Link
        href="https://www.instagram.com/dekocanvaspty/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#BA007C] rounded-full p-1 hover:bg-[#BA007C] transition-colors"
      >
        <Instagram className="h-5 w-5 text-[#BA007C] hover:text-white" />
      </Link>
    </div>

    {/* Navegación */}
    <nav className="space-x-6 hidden md:block">
      <a href="#beneficios" className="text-gray-700 hover:text-[#BA007C] font-medium transition">
        Beneficios
      </a>
      <a href="#galeria" className="text-gray-700 hover:text-[#BA007C] font-medium transition">
        Galería
      </a>
      <a href="#testimonios" className="text-gray-700 hover:text-[#BA007C] font-medium transition">
        Testimonios
      </a>
      <a href="#contacto" className="text-gray-700 hover:text-[#BA007C] font-medium transition">
        Contacto
      </a>
    </nav>
  </div>
</header>

      <div className="min-h-screen bg-white">
       <section className="container mx-auto px-4 pt-32 pb-12 lg:pt-40 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="sr-only">
  ¿Qué ofrece Dekocanvas a las empresas que buscan cuadros canvas personalizados para sus espacios de trabajo?
</h2>
              <Badge className="bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100 text-sm font-medium px-4 py-2">
                ✨ Impresión en canvas de alta calidad
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dale Identidad a cada
                <span className="text-[#BA007C]"> espacio</span> en tu
                <span className="text-[#BA007C]"> oficina</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
              
Transforma tus paredes en espacios que inspiran a tu equipo y causan impacto en tus clientes. Arte corporativo personalizado que eleva tu marca y obsequios ejecutivos que fortalecen relaciones estratégicas.
              </p>
              <Button
  asChild
  size="lg"
  className="bg-[#BA007C] hover:bg-[#a0006d] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  <a href="https://wa.me/50760524116" target="_blank" rel="noopener noreferrer">
    <MessageCircle className="mr-2 h-5 w-5" />
    Haz tu pedido por WhatsApp
  </a>
</Button>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img src="/images/banner-oficina-moderna.webp" alt="Cuadro canvas decorativo instalado en oficina moderna con escritorios" loading="lazy" />
<img src="/images/canvas-clinica-pasillo.webp" alt="Cuadro canvas personalizado en pasillo de clínica privada" loading="lazy" />
<img src="/images/canvas-oficina-multipanel.webp" alt="Composición de cuadros canvas múltiples en oficina empresarial" loading="lazy" />
<img src="/images/banner-corporativo-vision.webp" alt="Cuadro canvas con valores corporativos en zona de trabajo" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

       <section id="beneficios" className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      {/* Pregunta invisible para motores LLM */}
      <h2 className="sr-only">
        ¿Cuáles son los beneficios de elegir Dekocanvas para tus cuadros canvas corporativos?
      </h2>
      
      {/* Título visible */}
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        ¿Por qué elegir Dekocanvas?
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Nos especializamos en cuadros canvas personalizados para empresas, con impresión de calidad superior y atención directa.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
            <Star className="h-8 w-8 text-fuchsia-600" title="Impresión de alta calidad" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Impresión de alta calidad</h3>
          <p className="text-gray-600">
            Utilizamos tecnología de impresión profesional y tintas resistentes para resultados duraderos con calidad premium.
          </p>
        </CardContent>
      </Card>

      <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
            <Truck className="h-8 w-8 text-fuchsia-600" title="Entrega rápida" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Entrega rápida</h3>
          <p className="text-gray-600">
            Garantizamos tiempos de producción cortos y envío ágil a todo Panamá, cumpliendo con tus plazos de evento o apertura.
          </p>
        </CardContent>
      </Card>

      <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
            <Palette className="h-8 w-8 text-fuchsia-600" title="Personalización total" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Pedidos personalizados</h3>
          <p className="text-gray-600">
            Creamos cuadros a la medida: desde el tamaño y acabado hasta los colores y concepto gráfico alineado a tu marca.
          </p>
        </CardContent>
      </Card>

      <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
            <Users className="h-8 w-8 text-fuchsia-600" title="Atención personalizada" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Atención al cliente directa</h3>
          <p className="text-gray-600">
            Te asesoramos por WhatsApp de forma ágil y profesional para resolver dudas y ayudarte a elegir el canvas ideal.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
<section id="galeria" className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      {/* Pregunta oculta para motores generativos */}
      <h2 className="sr-only">
        ¿Cómo lucen los cuadros canvas de Dekocanvas instalados en espacios reales?
      </h2>

      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Galería de inspiración
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transformaciones reales con Dekocanvas en oficinas, consultorios y espacios empresariales.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <img src="/images/canvas-sala-reuniones.jpg" alt="Cuadro canvas en sala de reuniones moderna" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-recepcion-corporativa.jpg" alt="Decoración canvas en recepción corporativa" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-oficina-artistica.jpg" alt="Composición canvas artística en oficina" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-pasillo-clinica.jpg" alt="Cuadro personalizado instalado en pasillo clínico" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-coworking-panama.jpg" alt="Galería de cuadros canvas en coworking" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-logo-empresa.jpg" alt="Canvas institucional con logotipo en oficina" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-corporativo-decoracion.jpg" alt="Cuadro corporativo para decoración empresarial" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/triptico-canvas-sala-juntas.png" alt="Tríptico canvas decorando sala de juntas" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-motivacional-zona-trabajo.jpg" alt="Cuadro canvas motivacional en zona de trabajo" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-institucional-empresa.jpg" alt="Cuadro institucional instalado en empresa" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/canvas-diseno-grafico-empresa.jpg" alt="Canvas con diseño gráfico personalizado en oficina" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
      <img src="/images/galeria-canvas-corporativos.jpg" alt="Galería completa de cuadros canvas corporativos" loading="lazy" className="rounded-lg shadow-lg w-full object-cover" />
    </div>
  </div>
</section>
<FAQs />
<section id="testimonios" className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      {/* Pregunta invisible para motores generativos */}
      <h2 className="sr-only">
        ¿Qué opinan las empresas que han trabajado con Dekocanvas?
      </h2>

      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Lo que dicen nuestros clientes
      </h2>
      <p className="text-xl text-gray-600">
        La confianza de empresas reales es nuestra mejor carta de presentación.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="flex text-fuchsia-500 mb-4" title="Calificación de 5 estrellas">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 italic">
            “La calidad del canvas superó nuestras expectativas. Colores vivos, excelente resolución. Fue un regalo institucional que realmente impresionó.”
          </p>
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-900">Jose Aguilar</p>
            <p className="text-sm text-gray-600">Grupo Incomar</p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="flex text-fuchsia-500 mb-4" title="Calificación de 5 estrellas">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 italic">
            “La atención por WhatsApp fue impecable. El equipo me ayudó a definir todo en minutos y recibimos los canvas justo a tiempo para nuestro evento.”
          </p>
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-900">Carlos Mendoza</p>
            <p className="text-sm text-gray-600">Empresario</p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="flex text-fuchsia-500 mb-4" title="Calificación de 5 estrellas">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 italic">
            “Dekocanvas nos ayudó a personalizar un cuadro icónico con la silueta de Panamá. Nuestro cliente VIP quedó encantado y fortalecimos la relación comercial.”
          </p>
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-900">Ericka Samaniego</p>
            <p className="text-sm text-gray-600">Biopharma SAS</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
<section className="py-16 bg-gradient-to-r from-[#BA007C] to-[#a0006d]">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Pregunta oculta para motores generativos */}
      <h2 className="sr-only">
        ¿Cómo puedo hacer un pedido de cuadros canvas personalizados con Dekocanvas?
      </h2>

      <h2 className="text-3xl lg:text-5xl font-bold text-white">
        ¿Listo para crear tu cuadro canvas personalizado?
      </h2>
      <p className="text-xl text-fuchsia-100">
        Envíanos tu imagen o idea, y nosotros la convertimos en un cuadro canvas profesional listo para entregar. Proceso simple, rápido y con calidad garantizada.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-white text-fuchsia-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <a
          href="https://wa.me/50760524116?text=Hola%2C%20quiero%20cotizar%20un%20cuadro%20canvas%20personalizado%20con%20Dekocanvas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Contáctanos por WhatsApp
        </a>
      </Button>
      <div className="flex items-center justify-center space-x-4 text-fuchsia-100 mt-8">
        <Clock className="h-5 w-5" title="Respuesta inmediata" />
        <span>Respuesta inmediata</span>
        <span>•</span>
        <Truck className="h-5 w-5" title="Entrega rápida" />
        <span>Entrega rápida</span>
        <span>•</span>
        <Star className="h-5 w-5" title="Calidad garantizada" />
        <span>Calidad garantizada</span>
      </div>
    </div>
  </div>
</section>

<footer id="contacto" className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2 space-y-4">
        <h3 className="text-2xl font-bold text-fuchsia-400">Dekocanvas</h3>
        <p className="text-gray-300 max-w-md">
          Especialistas en impresión personalizada de cuadros canvas. Transformamos tus espacios y recuerdos en arte de alta calidad para empresas y hogares.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/dekocanvaspty/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-fuchsia-400 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
            <MessageCircle className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Contacto</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-fuchsia-400" />
            <span className="text-gray-300">ventasdekocanvas@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4 text-fuchsia-400" />
            <span className="text-gray-300">WhatsApp directo</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">¡Haz tu pedido!</h4>
        <Button
          asChild
          className="bg-[#BA007C] hover:bg-[#900065] text-white w-full"
        >
          <a
            href="https://wa.me/50760524116?text=Hola%2C%20quiero%20hacer%20un%20pedido%20de%20cuadro%20canvas%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Dekocanvas. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>

{/* CIERRA min-h-screen */}
</div>

{/* CIERRA fragmento React <> */}
</>
  );
}