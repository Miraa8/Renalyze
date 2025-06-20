import mongoose from "mongoose";

export const connectDb = async () => {
  console.log(process.env.CONNECTION_URL);
  
  return await mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() => console.log("DB connected successfully"))
    .catch(() => console.log("failed to connect DB!"));
};
