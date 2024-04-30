/* eslint-disable eol-last, quotes */

import { createRoute } from "@/api/createRoute";
import { AdressesModel } from "@/database/models/AdressesModel";
import axios from "axios";

const handler = createRoute(async (req, res) => {
  if (req.method === "GET") {
    const adresses = await AdressesModel.find({});
    res.send(adresses);
    return;
  }

  if (req.method === "POST") {
    const nouvelleAdresse = new AdressesModel(req.body);

    await nouvelleAdresse.save();

    res.send(nouvelleAdresse);
  }
});

export default handler;
