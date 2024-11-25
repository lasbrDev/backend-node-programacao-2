import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Cliente = sequelize.define(
    "Cliente",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                len: [11, 14],
            },
        },
        nomeCompleto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(2), 
            allowNull: false,
            validate: {
                is: /^[A-Z]{2}$/,
            },
        },
        cep: {
            type: DataTypes.STRING(9),
            allowNull: false,
            validate: {
                is: /^\d{5}-?\d{3}$/,
            },
        },
    },
    {
        tableName: "clientes",
        timestamps: false,
    }
);
