import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2D1B3D] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Paula Pinzón. Todos los derechos reservados.</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-[#20C5BA]">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#20C5BA]">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#20C5BA]">
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#20C5BA]">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
