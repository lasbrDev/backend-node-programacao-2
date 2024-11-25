import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Produto = sequelize.define(
    "Produto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        codigo: {
            type: DataTypes.STRING(10), 
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            },
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true, 
                min: 0, 
            },
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        estoque: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 0, 
            },
        },
    },
    {
        tableName: "produtos",
        timestamps: false,
    }
);
