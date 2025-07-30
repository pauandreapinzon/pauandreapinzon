export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      content:
        "Trabajar con Paula ha sido una experiencia transformadora. Su conocimiento en IA aplicada a la producción audiovisual nos permitió crear contenido innovador y de alto impacto.",
    },
    {
      name: "Carlos Rodríguez",
      role: "Estudiante de Cine",
      content:
        "Las clases de Paula son increíbles. He aprendido a integrar IA en mis proyectos de una manera que nunca imaginé posible. Altamente recomendado para cualquier creador de contenido.",
    },
    {
      name: "Laura Martínez",
      role: "Emprendedora",
      content:
        "La asesoría de Paula fue clave para llevar mi marca al siguiente nivel. Su enfoque en la IA para la producción de video nos dio una ventaja competitiva única.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen mis clientes</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#2D1B3D] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-[#20C5BA]">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
