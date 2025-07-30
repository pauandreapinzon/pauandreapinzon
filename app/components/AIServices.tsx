import Image from "next/image"
import { Wand2, Video, PenTool, Cog, Music } from "lucide-react"

export default function AIServices() {
  return (
    <div className="bg-[#1B0B2B]">
      {/* Generative Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#2D1B3D] px-4 py-2 rounded-full mb-4">
              <Wand2 className="w-6 h-6 text-[#20C5BA] inline mr-2" />
              <span>IA Generativa</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Imagen Generativa con IA</h2>
            <p className="text-gray-300 mb-4">
              La IA generativa está revolucionando la creación de imágenes, permitiendo producir visuales únicos y
              personalizados para tu marca.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Creación de imágenes únicas para tu marca</li>
              <li>• Diseños personalizados para campañas publicitarias</li>
              <li>• Generación de contenido visual consistente</li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-10%20160747-MOYdgMh53HjXfrJdsSS5rJu5r6nno3.png"
              alt="IA Generativa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Video Creation Section */}
      <section className="py-20 px-4 bg-[#2D1B3D]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden md:order-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-11-21%20134920-18rR8Ydbqvrb9Juk79QbujHiWsirRD.png"
              alt="Creación de Videos"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <div className="inline-block bg-[#1B0B2B] px-4 py-2 rounded-full mb-4">
              <Video className="w-6 h-6 text-[#20C5BA] inline mr-2" />
              <span>Producción de Video</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Creación de Videos con IA</h2>
            <p className="text-gray-300 mb-4">
              Utiliza el poder de la IA para editar y generar videos profesionales de manera rápida y eficiente.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Edición automatizada de videos</li>
              <li>• Mejora de calidad con IA</li>
              <li>• Postproducción profesional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#2D1B3D] px-4 py-2 rounded-full mb-4">
              <PenTool className="w-6 h-6 text-[#20C5BA] inline mr-2" />
              <span>Creación de Contenido</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Contenido Optimizado con IA</h2>
            <p className="text-gray-300 mb-4">
              Maximiza el impacto de tu contenido en redes sociales y plataformas de streaming con la ayuda de la IA.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Planificación estratégica de contenido</li>
              <li>• Optimización para diferentes plataformas</li>
              <li>• Análisis de tendencias con IA</li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-17%20225709-hOzth0Xs49tJBEdcBHVSTuMbY8dQFP.png"
              alt="Creación de Contenido"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-20 px-4 bg-[#2D1B3D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#1B0B2B] px-4 py-2 rounded-full mb-4">
              <Cog className="w-6 h-6 text-[#20C5BA] inline mr-2" />
              <span>Automatización</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Automatizaciones Inteligentes</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Optimiza tu flujo de trabajo con automatizaciones inteligentes que ahorran tiempo y recursos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gestión de Redes",
                tools: ["Hootsuite", "Meta Business Suite", "Canva"],
              },
              {
                title: "Edición Automática",
                tools: ["Capcut", "Moises", "Invideo"],
              },
              {
                title: "Publicación de Contenido",
                tools: ["Make", "n8n"],
              },
            ].map((category, index) => (
              <div key={index} className="bg-[#1B0B2B] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {category.tools.map((tool, idx) => (
                    <li key={idx}>• {tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-300 text-lg">Y muchas más...</p>
        </div>
      </section>

      {/* Music AI Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden md:order-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-01-02%20150549-dZ1MCQOSFEnOuuCeWK4dL7DyNj4ShY.png"
              alt="Música con IA"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <div className="inline-block bg-[#2D1B3D] px-4 py-2 rounded-full mb-4">
              <Music className="w-6 h-6 text-[#20C5BA] inline mr-2" />
              <span>Música con IA</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Composición Musical con IA</h2>
            <p className="text-gray-300 mb-4">
              Descubre el potencial de la IA para crear música única y profesional para tus proyectos audiovisuales.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Composición musical personalizada</li>
              <li>• Mezcla y masterización con IA</li>
              <li>• Bandas sonoras únicas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
