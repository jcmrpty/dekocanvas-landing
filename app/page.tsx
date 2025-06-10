import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Palette, Users, Clock, MessageCircle, Mail, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DekocanvasLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-100 text-sm font-medium px-4 py-2">
              ✨ Impresión personalizada de alta calidad
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforma tus
              <span className="text-fuchsia-600"> recuerdos</span> en
              <span className="text-fuchsia-600"> arte</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Convierte tus fotografías favoritas en hermosos cuadros canvas personalizados. Calidad profesional,
              entrega rápida y atención directa por WhatsApp.
            </p>
            <Button
              size="lg"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Haz tu pedido por WhatsApp
            </Button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Canvas en sala moderna"
                width={250}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <Image
                src="/placeholder.svg?height=200&width=250"
                alt="Canvas en dormitorio"
                width={250}
                height={200}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Canvas en oficina"
                width={250}
                height={250}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <Image
                src="/placeholder.svg?height=220&width=250"
                alt="Canvas familiar"
                width={250}
                height={220}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
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
                <p className="text-gray-600">
                  Utilizamos tecnología de impresión profesional y materiales premium para resultados excepcionales
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Entrega rápida</h3>
                <p className="text-gray-600">
                  Procesamos y enviamos tu pedido en tiempo récord sin comprometer la calidad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pedidos personalizados</h3>
                <p className="text-gray-600">
                  Cada cuadro es único. Adaptamos tamaños, acabados y estilos según tus necesidades
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Atención al cliente directa</h3>
                <p className="text-gray-600">
                  Comunicación directa por WhatsApp para resolver dudas y acompañarte en todo el proceso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros clientes satisfechos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mira cómo nuestros cuadros canvas transforman espacios y crean ambientes únicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Image
                src="/placeholder.svg?height=400&width=350"
                alt="Canvas en sala de estar moderna"
                width={350}
                height={400}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <Image
                src="/placeholder.svg?height=300&width=350"
                alt="Canvas en dormitorio matrimonial"
                width={350}
                height={300}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              />
            </div>
            <div className="space-y-6 lg:mt-12">
              <Image
                src="/placeholder.svg?height=350&width=350"
                alt="Canvas en oficina ejecutiva"
                width={350}
                height={350}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <Image
                src="/placeholder.svg?height=280&width=350"
                alt="Canvas familiar en comedor"
                width={350}
                height={280}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              />
            </div>
            <div className="space-y-6">
              <Image
                src="/placeholder.svg?height=320&width=350"
                alt="Canvas en habitación infantil"
                width={350}
                height={320}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <Image
                src="/placeholder.svg?height=380&width=350"
                alt="Canvas en recibidor elegante"
                width={350}
                height={380}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
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
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fuchsia-600 to-fuchsia-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              ¿Listo para crear tu cuadro canvas personalizado?
            </h2>
            <p className="text-xl text-fuchsia-100">
              Envíanos tu imagen favorita y nosotros nos encargamos del resto. Proceso simple, rápido y con resultados
              profesionales.
            </p>
            <Button
              size="lg"
              className="bg-white text-fuchsia-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos por WhatsApp
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold text-fuchsia-400">Dekocanvas</h3>
              <p className="text-gray-300 max-w-md">
                Especialistas en impresión personalizada de cuadros canvas. Transformamos tus recuerdos en arte de alta
                calidad.
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

            {/* Contact Info */}
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

            {/* WhatsApp Button */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">¡Haz tu pedido!</h4>
              <Button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Dekocanvas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
