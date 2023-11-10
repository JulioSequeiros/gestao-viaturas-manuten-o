const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await prisma.marcacoes.findUnique({
            where: {
                id: id,
            },
        });
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Not Found', msg: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', msg: error.message });
    }
};

exports.create = async (req, res) => {
    const { id,data,descricao} = req.body;
    try {
        const marcacao = await prisma.marcacoes.create({
            data: {
                id: id,
                descricao: descricao,
                data: data
            },
        });
        res.status(201).json(marcacao);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { id,descricao,data} = req.body;
    try {
        const marcacao = await prisma.marcacoes.update({
            where: {
                id: id,
            },
            data: {
                descricao: descricao,
                data: data
            },
        });
        res.status(200).json(marcacao);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};


exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.marcacoes.delete({
            where: {
                id: id,
            },
        });
        res.status(204).send(); // Using 204 No Content for successful deletion
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};
