import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';


export const Fornecedor = sequelize.define('Fornecedor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razaoSocial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'fornecedores',
    timestamps: false
});