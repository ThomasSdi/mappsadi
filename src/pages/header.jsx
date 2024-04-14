import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image'; // Importer le composant Image de Next.js

const Header = () => {
    return (
        <header>
            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    {/* Utiliser le composant Image de Next.js */}
                    <Image src="/AdiMaps.png" alt="Logo de votre site web" width={100} height={100} />
                </Link>
            </div>
            {/* Liens de navigation */}
            <nav>
                <ul>
                    {/* Lien vers la page d'accueil */}
                    <li>
                        <Link to="/">Liste</Link>
                    </li>
                    {/* Lien vers la page d'ajout */}
                    <li>
                        <Link to="/ajout">Ajout</Link>
                    </li>
                    {/* Ajoutez d'autres liens ici si nécessaire */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
