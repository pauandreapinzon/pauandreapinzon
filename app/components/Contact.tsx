import { Youtube, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctame</h2>
        <form className="mb-12">
          <div className="mb-4">
            <input type="text" placeholder="Nombre" className="w-full p-2 bg-[#2D1B3D] rounded" required />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full p-2 bg-[#2D1B3D] rounded" required />
          </div>
          <div className="mb-4">
            <textarea placeholder="Mensaje" className="w-full p-2 bg-[#2D1B3D] rounded" rows={4} required></textarea>
          </div>
          <a
            href="mailto:pauandreapinzon@gmail.com"
            className="bg-[#20C5BA] hover:bg-[#E91E63] text-white font-bold py-2 px-4 rounded transition duration-300 inline-block"
          >
            Enviar mensaje
          </a>
        </form>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Sígueme en redes sociales</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://youtube.com/@pauandreapinzon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20C5BA] hover:text-[#E91E63]"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/paula-pinzon-maldonado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20C5BA] hover:text-[#E91E63]"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/pauandreapinzon_ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20C5BA] hover:text-[#E91E63]"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
