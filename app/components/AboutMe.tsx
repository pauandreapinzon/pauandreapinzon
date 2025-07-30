import Image from "next/image"

export default function AboutMe() {
  return (
    <section className="py-20 px-4 bg-[#2D1B3D]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-02%20184951-KDX6vjqjB3t6vSvt88xfsjqOQgk2O0.png"
              alt="Paula Pinzón"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
            <div className="absolute inset-0 rounded-full border-4 border-[#20C5BA] opacity-50"></div>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg mb-4">
            Soy una productora audiovisual con IA y profesora universitaria con amplia experiencia en la dirección de
            proyectos culturales y educativos. PhD en Historia del Arte en curso y especialista en Inteligencia
            Artificial Generativa, impulsando la convergencia entre arte, tecnología y humanidades.
          </p>
          <p className="text-lg mb-4">
            Mi enfoque interdisciplinario y holístico me permite abordar el impacto de la tecnología en la educación
            artística y diseñar programas que integren herramientas generativas. Me apasiona la formación de estudiantes
            a través de metodologías innovadoras, promoviendo la creatividad y el pensamiento crítico en la era digital.
          </p>
          <p className="text-lg">
            Gracias a mi profunda comprensión del proceso creativo y al dominio de las últimas tendencias en IA, ayudo a
            artistas, marcas y creadores a obtener resultados en tiempo récord.
          </p>
        </div>
      </div>
    </section>
  )
}
