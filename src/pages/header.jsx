import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex items-center h-12">
      <div className="logo">
        <Link href="/">
          <Image src="/AdiMaps.png" alt="AdiMaps logo" width={80} height={80} />
        </Link>
      </div>
      <nav className="flex flex-row items-center gap-3 mx-4">
        <ul className="flex flex-row items-center">
          <li key="liste">
            <Link href="/">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded">
                Accueil
              </button>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row items-center">
          <li key="add">
            <Link href="/ajout">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-4">
                Ajout
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
