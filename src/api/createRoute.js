import mongoose from "mongoose"

export const createRoute = (handle) => async (req, res) => {
  await mongoose.connect('process.env.mongodb://localhost:27017/')

  await handle(req, res)
}