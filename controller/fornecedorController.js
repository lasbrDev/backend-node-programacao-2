import { Fornecedor } from "../model/fornecedor.js";

const handleError = (res, error, status = 500) => {
    res.status(status).json({ error: error.message || error });
};

export const cadastrarFornecedor = async (req, res) => {
    try {
        const { cnpj, razaoSocial, telefone, email, endereco } = req.body;

        if (!cnpj || !razaoSocial || !telefone || !email || !endereco) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const fornecedor = await Fornecedor.create({ cnpj, razaoSocial, telefone, email, endereco });
        res.status(201).json(fornecedor);
    } catch (error) {
        handleError(res, error);
    }
};

export const consultarFornecedores = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { count, rows } = await Fornecedor.findAndCountAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        });

        res.status(200).json({ total: count, fornecedores: rows });
    } catch (error) {
        handleError(res, error);
    }
};

export const atualizarFornecedorParcial = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) {
            return res.status(404).json({ error: 'Fornecedor não encontrado' });
        }

        await fornecedor.update(updates);
        res.status(200).json(fornecedor);
    } catch (error) {
        handleError(res, error);
    }
};

export const atualizarFornecedor = async (req, res) => {
    try {
        const { id } = req.params;
        const { cnpj, razaoSocial, telefone, email, endereco } = req.body;

        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) {
            return res.status(404).json({ error: 'Fornecedor não encontrado' });
        }

        await fornecedor.update({ cnpj, razaoSocial, telefone, email, endereco });
        res.status(200).json(fornecedor);
    } catch (error) {
        handleError(res, error);
    }
};

export const excluirFornecedor = async (req, res) => {
    try {
        const { id } = req.params;

        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) {
            return res.status(404).json({ error: 'Fornecedor não encontrado' });
        }

        await fornecedor.destroy();
        res.status(200).json({ message: 'Fornecedor excluído com sucesso' });
    } catch (error) {
        handleError(res, error);
    }
};