import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sequelize } from "./config/database.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import fornecedorRoutes from "./routes/fornecedorRoutes.js";
import produtoRoutes from "./routes/produtoRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 4000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/clientes", clienteRoutes);
app.use("/api/produtos", produtoRoutes);
app.use("/api/fornecedores", fornecedorRoutes);


sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
        process.exit(1);
    });
