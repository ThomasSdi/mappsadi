import { Schema } from "mongoose"
export const schemaAdresse = new Schema({
  
    
    type: {
    type: String,
    required: true,
    enum: ["Restaurant", "Musee", "Bar", "Parc"], 
  },

  nom: {
    type: String,
    required: true,
  },
  
  rue: {
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

  //Elements reservees aux restaurants 
  typeDeCuisine: {
    type: String,
    required: true,
    enum: ["Bistro", "Etoile", "Fast-Food", "Pizzeria"], 
  },

  nombreEtoiles: {
    type: Number,
    min: 1,
    max: 3
  },
 
  prixMoyenCuisine: {
    type: Number,
    min: 1,
    max: 5
  },
  

  // Elements reservees aux musees
  
  CourantArtistique: {
    type: String,
    enum: ["Romantisme", "Impressionnisme", "Baroque", "Contemporain"], 
  },
  
  typeArt: {
    type: String,
    required: true,
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
    required: function() {
      return this.entree === "Payant";
    }
  },
  
  // Elements reservees aux bar 
  
  typeDeBar: {
    type: String,
    required: true,
    enum: ["Bar a vin", "Bar a cocktail", "Pub", "Bar a theme", "Bar a jeux de societe"], 
  },

  
  // Champs spécifiques aux parcs

  typeDeParc: {
    type: String,
    required: true,
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
    required: function() {
      return this.entreeParc === "Payant";
    }
  },
})
