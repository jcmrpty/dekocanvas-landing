import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  return (
    <>
<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
  {/* Franja de promoción */}
  <div className="bg-fuchsia-600 text-white text-sm text-center py-2 px-4 font-medium">
    🎉 Promoción: 10% de descuento en tu primer pedido •{" "}
    <a
      href="https://wa.me/50760524116"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-gray-100"
    >
      HAZ TU PEDIDO AHORA
    </a>
  </div>

  {/* Navegación principal */}
  <div className="container mx-auto px-4 py-4 flex items-center justify-between bg-white">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <Image
        src="/images/dekocanvaslogo.jpeg"
        alt="Dekocanvas Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      
    </div>

    {/* Menú */}
    <nav className="space-x-6 hidden md:block">
      <a href="#beneficios" className="text-gray-700 hover:text-fuchsia-600 font-medium transition">
        Beneficios
      </a>
      <a href="#galeria" className="text-gray-700 hover:text-fuchsia-600 font-medium transition">
        Galería
      </a>
      <a href="#testimonios" className="text-gray-700 hover:text-fuchsia-600 font-medium transition">
        Testimonios
      </a>
      <a href="#contacto" className="text-gray-700 hover:text-fuchsia-600 font-medium transition">
        Contacto
      </a>
    </nav>
  </div>
</header>

      <div className="min-h-screen bg-white">
       <section className="container mx-auto px-4 pt-32 pb-12 lg:pt-40 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100 text-sm font-medium px-4 py-2">
                ✨ Impresión personalizada de alta calidad
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dale Identidad a cada
                <span className="text-fuchsia-600"> espacio</span> en tu
                <span className="text-fuchsia-600"> oficina</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Más que decoración: comunicación estratégica. Espacios corporativos, regalos personalizados y reconocimientos que refuerzan tu cultura empresarial
              </p>
              <Button
  asChild
  size="lg"
  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  <a href="https://wa.me/50760524116" target="_blank" rel="noopener noreferrer">
    <MessageCircle className="mr-2 h-5 w-5" />
    Haz tu pedido por WhatsApp
  </a>
</Button>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img src="/images/hero1.png" alt="Cuadro decorativo 1" className="rounded-lg shadow-lg" />
                <img src="/images/hero2.jpg" alt="Cuadro decorativo 2" className="rounded-lg shadow-lg" />
                <img src="/images/hero3.png" alt="Cuadro decorativo 3" className="rounded-lg shadow-lg" />
                <img src="/images/hero4.jpg" alt="Cuadro decorativo 4" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

       <section id="beneficios" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir Dekocanvas?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nos especializamos en crear cuadros canvas únicos con la mejor calidad y servicio personalizado
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-8 w-8 text-fuchsia-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Impresión de alta calidad</h3>
                  <p className="text-gray-600">Utilizamos tecnología de impresión profesional y materiales premium.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-8 w-8 text-fuchsia-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Entrega rápida</h3>
                  <p className="text-gray-600">Procesamos y enviamos tu pedido en tiempo récord.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                    <Palette className="h-8 w-8 text-fuchsia-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Pedidos personalizados</h3>
                  <p className="text-gray-600">Adaptamos tamaños, acabados y estilos a tus necesidades.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-fuchsia-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Atención al cliente directa</h3>
                  <p className="text-gray-600">Comunicación por WhatsApp para resolver dudas y acompañarte.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="galeria" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Galería de inspiración</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transformaciones reales con Dekocanvas</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <img
      src="/images/gallery01.jpg"
      alt="Galería Dekocanvas 1"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery03.jpg"
      alt="Galería Dekocanvas 3"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery04.jpg"
      alt="Galería Dekocanvas 4"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery02.jpg"
      alt="Galería Dekocanvas 2"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery06.jpg"
      alt="Galería Dekocanvas 6"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery07.jpg"
      alt="Galería Dekocanvas 7"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery08.jpg"
      alt="Galería Dekocanvas 8"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery09.png"
      alt="Galería Dekocanvas 9"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery10.jpg"
      alt="Galería Dekocanvas 10"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery11.jpg"
      alt="Galería Dekocanvas 11"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery05.jpg"
      alt="Galería Dekocanvas 5"
      className="rounded-lg shadow-lg w-full object-cover"
/>
<img
      src="/images/gallery12.jpg"
      alt="Galería Dekocanvas 12"
      className="rounded-lg shadow-lg w-full object-cover"
/>
            </div>
          </div>
        </section>

<section id="testimonios" className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
      <p className="text-xl text-gray-600">
        La satisfacción de nuestros clientes es nuestra mejor carta de presentación
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="flex text-fuchsia-500 mb-4">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="text-gray-700 italic">
            "Quedé impresionada con la calidad del canvas. La imagen se ve nítida y los colores son vibrantes.
            Definitivamente volveré a pedir más cuadros."
          </p>
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-900">María González</p>
            <p className="text-sm text-gray-600">Cliente satisfecha</p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="flex text-fuchsia-500 mb-4">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="text-gray-700 italic">
            "El servicio por WhatsApp fue excelente. Me ayudaron a elegir el tamaño perfecto y la entrega fue
            súper rápida. Mi oficina se ve increíble ahora."
          </p>
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-900">Carlos Mendoza</p>
            <p className="text-sm text-gray-600">Empresario</p>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardContent className="space-y-4">
          <div className="flex text-fuchsia-500 mb-4">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="text-gray-700 italic">
            "Hice un pedido personalizado para mi sala y el resultado superó mis expectativas. La atención fue
            personalizada y muy profesional."
          </p>
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-900">Ana Rodríguez</p>
            <p className="text-sm text-gray-600">Diseñadora de interiores</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


<section className="py-16 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl lg:text-5xl font-bold text-white">
        ¿Listo para crear tu cuadro canvas personalizado?
      </h2>
      <p className="text-xl text-fuchsia-100">
        Envíanos tu imagen favorita y nosotros nos encargamos del resto. Proceso simple, rápido y profesional.
      </p>
      <Button
  asChild
  size="lg"
  className="bg-white text-fuchsia-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  <a href="https://wa.me/50760524116" target="_blank" rel="noopener noreferrer">
    <MessageCircle className="mr-2 h-5 w-5" />
    Contáctanos por WhatsApp
  </a>
</Button>
      <div className="flex items-center justify-center space-x-4 text-fuchsia-100 mt-8">
        <Clock className="h-5 w-5" />
        <span>Respuesta inmediata</span>
        <span>•</span>
        <Truck className="h-5 w-5" />
        <span>Entrega rápida</span>
        <span>•</span>
        <Star className="h-5 w-5" />
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
          Especialistas en impresión personalizada de cuadros canvas. Transformamos tus recuerdos en arte de alta calidad.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
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
  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white w-full"
>
  <a href="https://wa.me/50760524116" target="_blank" rel="noopener noreferrer">
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

      </div>
    </>
  )
}
