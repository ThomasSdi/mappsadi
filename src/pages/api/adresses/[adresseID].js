/* eslint-disable eol-last, quotes */
import axios from "axios";
import { createRoute } from "@/api/createRoute";
import { AdresseModel } from "@/database/models/AdresseModel";

const handler = createRoute(async (req, res) => {
  const { adresseId } = req.query;
  const adresse = await AdresseModel.findById(adresseId);

  if (!adresse) {
    res.status(404).send({ error: "non trouvé" });

    return;
  }

  // GET /address/[addressId] -> lire l'élément de la ressource
  if (req.method === "GET") {
    res.send(adresse);

    return;
  }

  if (req.method === "EDIT") {
    const {
      nom,
      rue,
      ville,
      codePostal,
      type,
      prixMoyen,
      prix,
      entree,
      nombreEtoiles,
      typeDeCuisine,
      CourantArtistique,
      typeArt,
      typeDeParc,
      statusParc,
      entreeParc,
      prixParc,
      typeDeBar,
      isDone,
    } = req.body;

    Object.assign(adresse, {
      nom: nom || adresse.nom,
      rue: rue || adresse.rue,
      ville: ville || adresse.ville,
      codePostal: codePostal || adresse.codePostal,
      type: type || adresse.type,
      prixMoyen: prixMoyen || adresse.prixMoyen,
      prix: prix || adresse.prix,
      entree: entree ?? adresse.entree,
      nombreEtoiles: nombreEtoiles || adresse.nombreEtoiles,
      typeDeCuisine: typeDeCuisine || adresse.typeDeCuisine,
      CourantArtistique: CourantArtistique || adresse.CourantArtistique,
      typeArt: typeArt || adresse.typeArt,
      typeDeParc: typeDeParc || adresse.typeDeParc,
      statusParc: statusParc || adresse.statusParc,
      entreeParc: entreeParc || adresse.entreeParc,
      prixParc: prixParc || adresse.prixParc,
      typeDeBar: typeDeBar || adresse.typeDeBar,
      isDone: isDone ?? adresse.isDone,
    });

    await adresse.save();

    res.send(adresse);

    return;
  }

  if (req.method === "DELETE") {
    await adresse.deleteOne();

    res.send(adresse);
  }
});

export default handler;
