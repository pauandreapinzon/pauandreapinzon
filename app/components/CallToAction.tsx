import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-[#2D1B3D] text-center">
      <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu contenido con IA?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
        Da el primer paso hacia una producción audiovisual innovadora y de alta calidad.
      </p>
      <Link
        href="https://linkedin.com/in/paula-pinzon-maldonado/"
        className="bg-[#20C5BA] hover:bg-[#E91E63] text-white font-bold py-3 px-8 rounded-full transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Programa tu asesoría
      </Link>
    </section>
  )
}
