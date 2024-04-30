import { Schema } from "mongoose";
export const schemaAdresse = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["Restaurant", "Musée", "Bar", "Parc"],
  },

  nom: {
    type: String,
    required: true,
  },

  adresse: {
    type: String,
    required: true,
  },

  ville: {
    type: String,
    required: true,
  },

  codePostal: {
    type: String,
    required: true,
  },

  pays: {
    type: String,
    required: true,
  },

  typeDeCuisine: {
    type: String,
    enum: ["Bistro", "Etoile", "Fast-Food", "Pizzeria"],
  },

  nombreEtoiles: {
    type: Number,
    min: 1,
    max: 3,
  },

  prixMoyenCuisine: {
    type: Number,
    min: 1,
    max: 5,
  },

  courantArtistique: {
    type: String,
    enum: ["Romantisme", "Impressionnisme", "Baroque", "Contemporain"],
  },

  typeArt: {
    type: String,
    enum: ["Peinture", "Sculpture ", "Gravure", "Photographie", "Ceramique"],
  },

  entree: {
    type: String,
    enum: ["Gratuit", "Payant"],
  },

  prix: {
    type: Number,
    min: 1,
    max: 5,
    required: function () {
      return this.entree === "Payant";
    },
  },

  typeDeBar: {
    type: String,
    enum: [
      "Bar a vin",
      "Bar a cocktail",
      "Pub",
      "Bar a theme",
      "Bar a jeux de societe",
    ],
  },

  typeDeParc: {
    type: String,
    enum: ["floral", "forestier", "zoologique", "parc d'attraction", "square"],
  },

  statusParc: {
    type: String,
    enum: ["Public", "Privé"],
  },

  entreeParc: {
    type: String,
    enum: ["Gratuit", "Payant"],
  },

  prixParc: {
    type: Number,
    min: 1,
    max: 5,
    required: function () {
      return this.entreeParc === "Payant";
    },
  },
});
