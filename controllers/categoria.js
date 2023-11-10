const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await prisma.categorias.findUnique({
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
    const { name, id } = req.body;
    try {
        const categoria = await prisma.categorias.create({
            data: {
                id: id,
                name: name,
            },
        });
        res.status(201).json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { name,id } = req.body;
    try {
        const categoria = await prisma.categorias.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.categorias.delete({
            where: {
                id: id,
            },
        });
        res.status(204).send(); // Using 204 No Content for successful deletion
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};
