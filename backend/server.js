import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({path: './config/.env'});

app.get('/', (req,res) => {
    return res.status(200).send("Hello Beach Buddy!");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening to Port ${process.env.PORT}`);
});