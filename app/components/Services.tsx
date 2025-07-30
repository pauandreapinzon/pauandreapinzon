import { Camera, Users, Video } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Clases",
      description:
        "Aprende a aplicar IA en tus proyectos audiovisuales y domina la producción de video, desde la idea hasta la postproducción.",
      icon: <Camera className="w-12 h-12 text-[#20C5BA]" />,
    },
    {
      title: "Asesorías",
      description:
        "¿Tienes dudas sobre cómo innovar en tus producciones? Recibe acompañamiento experto para llevar tus proyectos al siguiente nivel.",
      icon: <Users className="w-12 h-12 text-[#20C5BA]" />,
    },
    {
      title: "Producción Audiovisual con IA",
      description:
        "Genera contenido impactante a través de herramientas de inteligencia artificial, con resultados profesionales y optimizados.",
      icon: <Video className="w-12 h-12 text-[#20C5BA]" />,
    },
  ]

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-[#2D1B3D] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
