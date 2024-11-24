import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";


export const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'clientes',
    timestamps: false
});