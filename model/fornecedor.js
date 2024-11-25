import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Fornecedor = sequelize.define(
    "Fornecedor",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cnpj: {
            type: DataTypes.STRING(18), 
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                is: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 
            },
        },
        razaoSocial: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        telefone: {
            type: DataTypes.STRING(15), 
            allowNull: false,
            validate: {
                is: /^\(\d{2}\) \d{4,5}-\d{4}$/, 
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true, 
            },
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "fornecedores",
        timestamps: false,
    }
);
