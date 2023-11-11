import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to your first API endpoint in nodejs")
});

mongoose
.connect(mongoDBURL)
.then(() => {
  console.log('App is connected to database');
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
})
.catch((e) => {
console.log(e);
});