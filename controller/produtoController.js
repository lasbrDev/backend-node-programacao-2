import { Produto } from "../model/produto.js";

const handleError = (res, error, status = 500) => {
    res.status(status).json({ error: error.message || error });
}

export const cadastrarProduto = async (req, res) => {
    try {
        const { codigo, nome, descricao, preco, categoria, estoque } = req.body;

        if (!codigo || !nome || !descricao || !preco || !categoria || !estoque) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const produto = await Produto.create({ codigo, nome, descricao, preco, categoria, estoque });
        res.status(201).json(produto);
    } catch (error) {
        handleError(res, error);
    }
};

export const consultarProdutos = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { count, rows } = await Produto.findAndCountAll({
            offset: parseInt(offset),
            limit: parseInt(limit)
        });

        res.status(200).json({ total: count, produtos: rows });
    } catch (error) {
        handleError(res, error);
    }
};

export const atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { codigo, nome, descricao, preco, categoria, estoque } = req.body;

        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        await produto.update({ codigo, nome, descricao, preco, categoria, estoque });
        res.status(200).json(produto);
    } catch (error) {
        handleError(res, error);
    }
};

export const atualizarProdutoParcial = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        await produto.update(updates);
        res.status(200).json(produto);
    } catch (error) {
        handleError(res, error);
    }
};

export const excluirProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        await produto.destroy();
        res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        handleError(res, error);
    }
};