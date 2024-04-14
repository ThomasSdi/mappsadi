import { AdressSchema } from "@/database/schemas/AdressSchema"
import mongoose from "mongoose"

export const TodoModel =
  mongoose.models.Todo || mongoose.model("Todo", AdressSchema)