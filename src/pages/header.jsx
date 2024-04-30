import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center">
      <div className="logo">
        <Link href="/">
          <Image
            src="/AdiMaps.png"
            alt="AdiMaps logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <nav className="flex gap-3 mx-4">
        <ul className="flex flex-row">
          <li key="add">
            <Link href="/ajout">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ajout
              </button>
            </Link>
          </li>
          <li key="liste">
            <Link href="/">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Liste
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
