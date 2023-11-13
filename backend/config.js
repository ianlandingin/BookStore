import dotenv from "dotenv";

const env = dotenv.config();

export const PORT = process.env.PORT;

export const mongoDBURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}`;
