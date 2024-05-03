/* eslint-disable eol-last, quotes */
import axios from "axios"
import { createRoute } from "@/api/createRoute"
import { AdressesModel } from "@/database/models/AdressesModel"

const handler = createRoute(async (req, res) => {
  const { adresseId } = req.query
  let adresse = await AdressesModel.findById(adresseId)

  if (!adresse) {
    res.status(404).send({ error: "non trouvé" })
    return
  }

  if (req.method === "GET") {
    res.send(adresse)
    return
  }

  if (req.method === "PUT") {
    const { type, nom, adresse: newAdresse, ville, codePostal, pays } = req.body

    adresse = {
      type,
      nom,
      adresse: newAdresse,
      ville,
      codePostal,
      pays,
    }

    await AdressesModel.findByIdAndUpdate(adresseId, adresse)

    res.send(adresse)
    return
  }

  if (req.method === "DELETE") {
    await adresse.deleteOne()
    res.send(adresse)
    return
  }
})

export default handler
