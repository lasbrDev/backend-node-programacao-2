import { Produto } from "../model/produto";

export const cadastrarProduto = async (req, res) => {
    try {
        const { codigo, nome, preco, descricao, estoque } = req.body;

        if (!codigo || !nome || !preco || !descricao || !estoque) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const produto = await Produto.create({ codigo, nome, preco, descricao, estoque });
        res.status(201).json(produto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const listarProdutos = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const produtos = await Produto.findAll({
        offset: parseInt(offset),
        limit: parseInt(limit)
    });
    res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { codigo, nome, preco, descricao, estoque } = req.body;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        await produto.update({ codigo, nome, preco, descricao, estoque });
        res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const excluirProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        await produto.destroy();
        res.status(200).json({ message: 'Produto excluido com sucesso' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
