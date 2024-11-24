import { Cliente } from "../model/cliente";

export const cadastrarCliente = async (req, res) => {
    try {
        const { cpf, nomeCompleto, endereco, cidade, estado, cep } = req.body;

        if (!cpf || !nomeCompleto || !endereco || !cidade || !estado || !cep) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const cliente = await Cliente.create({ cpf, nomeCompleto, endereco, cidade, estado, cep });
        res.status(201).json(cliente);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const listarClientes = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const clientes = await Cliente.findAll({
        offset: parseInt(offset),
        limit: parseInt(limit)
    });
    res.status(200).json(clientes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { cpf, nomeCompleto, endereco, cidade, estado, cep } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        await cliente.update({ cpf, nomeCompleto, endereco, cidade, estado, cep });
        res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const excluirCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        await cliente.destroy();
        res.status(200).json({ message: 'Cliente excluido com sucesso' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};