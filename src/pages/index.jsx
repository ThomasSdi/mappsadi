import React, { useState, useEffect } from "react"
import axios from "axios"

const Adresses = () => {
  const [adresses, setAdresses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const addressesPerPage = 4
  const [selectedFilter, setSelectedFilter] = useState("")
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [hoveredAddress, setHoveredAddress] = useState(null)

  useEffect(() => {
    const fetchAdresses = async () => {
      try {
        const response = await axios.get("/api/adresses")
        setAdresses(response.data)
      } catch (error) {
        console.error("Error fetching adresses:", error)
      }
    }
    fetchAdresses()
  }, [])

  const indexOfLastAddress = currentPage * addressesPerPage
  const indexOfFirstAddress = indexOfLastAddress - addressesPerPage
  const currentAddresses = adresses
    .filter((adresse) => !selectedFilter || adresse.type === selectedFilter)
    .slice(indexOfFirstAddress, indexOfLastAddress)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value)
    setCurrentPage(1)
  }

  const handleDeleteAddress = async (id) => {
    try {
      await axios.delete(`/api/adresses/${id}`)
      setAdresses(adresses.filter((adresse) => adresse._id !== id))
      setSelectedAddress(null)
    } catch (error) {
      console.error("Error deleting address:", error)
    }
  }

  const handleEditAddress = (adresse) => {
    setSelectedAddress(adresse)
  }

  const handleSaveChanges = (e) => {
    e.preventDefault()
    const updatedAdresse = {
      _id: selectedAddress._id,
      nom: e.target.nom.value,
      adresse: e.target.adresse.value,
      ville: e.target.ville.value,
      codePostal: e.target.codePostal.value,
      pays: e.target.pays.value,
    }
    axios
      .put(`/api/adresses/${selectedAddress._id}`, updatedAdresse)
      .then((response) => {
        setAdresses(
          adresses.map((a) =>
            a._id === selectedAddress._id ? updatedAdresse : a
          )
        )
        setSelectedAddress(null)
      })
      .catch((error) => {
        console.error("Error updating address:", error)
      })
  }

  return (
    <div className="flex justify-center items-center h-screen background-image">
      <div className="w-full bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Liste des adresses</h1>
        <div className="mb-4">
          <label htmlFor="filter" className="block font-bold mb-2">
            Filtre par type:
          </label>
          <select
            id="filter"
            value={selectedFilter}
            onChange={handleFilterChange}
            className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
          >
            <option value="">Tous les types</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Musée">Musée</option>
            <option value="Bar">Bar</option>
            <option value="Parc">Parc</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {currentAddresses.map((adresse) => (
            <div
              key={adresse._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-300 relative"
              onMouseEnter={() => {
                setHoveredAddress(adresse._id)
              }}
              onMouseLeave={() => {
                setHoveredAddress(null)
              }}
              onClick={() => {
                setSelectedAddress(adresse)
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
        {selectedAddress && (
          <div className="mt-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <form onSubmit={handleSaveChanges}>
                <div className="mb-4">
                  <label htmlFor="nom" className="block font-bold mb-2">
                    Nom:
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    defaultValue={selectedAddress.nom}
                    className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="adresse" className="block font-bold mb-2">
                    Adresse:
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    defaultValue={selectedAddress.adresse}
                    className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="ville" className="block font-bold mb-2">
                    Ville:
                  </label>
                  <input
                    type="text"
                    id="ville"
                    name="ville"
                    defaultValue={selectedAddress.ville}
                    className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="codePostal" className="block font-bold mb-2">
                    Code Postal:
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    name="codePostal"
                    defaultValue={selectedAddress.codePostal}
                    className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pays" className="block font-bold mb-2">
                    Pays:
                  </label>
                  <input
                    type="text"
                    id="pays"
                    name="pays"
                    defaultValue={selectedAddress.pays}
                    className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => setSelectedAddress(null)}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Sauvegarder les modifications
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteAddress(selectedAddress._id)
                    }}
                  >
                    Supprimer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="mt-4 flex justify-center items-center">
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Précédent
            </button>
          )}
          {adresses.length > indexOfLastAddress && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Suivant
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Adresses
