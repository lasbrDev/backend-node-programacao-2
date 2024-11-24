import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Produto = sequelize.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },  
},
{
    tableName: 'produtos',
    timestamps: false
});