import React from "react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-10 h-16 bg-white py-2 px-6 shadow-md">
      <nav className="flex justify-between items-center">
        <ul className="nav-left">
          <li>
            <Link href="/">
              <Image
                src="/maison.png"
                alt="Accueil"
                width={40}
                height={40}
                className="hover:scale-110 transition duration-400 ease-in-out"
              />
            </Link>
          </li>
        </ul>
        <div className="logo flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MapsSadi logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <ul className="nav-right">
          <li>
            <Link href="/ajout">
              <Image
                src="/ajout.png"
                alt="Ajout"
                width={40}
                height={40}
                className="hover:scale-110 transition duration-400 ease-in-out"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
