import { schemaAdresse } from "@/database/schemas/AdressesSchema";
import mongoose from "mongoose";

export const AdressesModel =
  mongoose.models.Adresses || mongoose.model("Adresses", schemaAdresse);
