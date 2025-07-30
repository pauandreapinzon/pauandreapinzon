import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner%20Paula.jpg-POvZ1fYQZBfV7kcxjsXKW0pUxZ5A4u.jpeg"
          alt="Paula Pinzón AI Production"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1B0B2B] bg-opacity-70"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Paula Pinzón – Conferencista y Producción Audiovisual con IA</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
          Potencia tu vida con Inteligencia Artificial
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Soy Paula Pinzón, experta en producción audiovisual y entrenadora en IA
        </p>
        <Link
          href="https://ia-paula-pinzon-07302025.zapier.app"
          className="bg-[#20C5BA] hover:bg-[#E91E63] text-white font-bold py-3 px-8 rounded-full transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Habla con mi chatbot
        </Link>
      </div>
    </header>
  )
}
