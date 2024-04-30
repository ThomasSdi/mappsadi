// pages/Adresses.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Adresses = () => {
  const [adresses, setAdresses] = useState([]);

  useEffect(() => {
    const fetchAdresses = async () => {
      try {
        const response = await axios.get("/api/adresses");
        setAdresses(response.data);
      } catch (error) {
        console.error("Error fetching adresses:", error);
      }
    };
    fetchAdresses();
  }, []);

  return (
    <div>
      {" "}
      {/* Reduced margin at the top */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-full bg-white p-8 rounded shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Liste des adresses</h1>
          <div className="grid grid-cols-2 gap-4">
            {adresses.slice(0, 4).map((adresse) => (
              <div
                key={adresse._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                onClick={() => {
                  console.log("Adresse cliquée :", adresse);
                }}
              >
                <div className="font-bold mb-1">Type:</div>
                <div className="text-sm">{adresse.type}</div>

                <div className="font-bold mt-2 mb-1">Nom:</div>
                <div className="text-sm">{adresse.nom}</div>

                <div className="font-bold mt-2 mb-1">Adresse:</div>
                <div className="text-sm">{adresse.adresse}</div>

                <div className="font-bold mt-2 mb-1">Ville:</div>
                <div className="text-sm">{adresse.ville}</div>

                <div className="font-bold mt-2 mb-1">Code Postal:</div>
                <div className="text-sm">{adresse.codePostal}</div>

                <div className="font-bold mt-2 mb-1">Pays:</div>
                <div className="text-sm">{adresse.pays}</div>
              </div>
            ))}
          </div>
          {adresses.length > 4 && (
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Afficher plus
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adresses;
