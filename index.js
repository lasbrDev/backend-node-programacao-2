import { sequelize } from "./config/database.js";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.async().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(err => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
});