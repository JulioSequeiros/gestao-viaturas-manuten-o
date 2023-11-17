const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await prisma.viatura.findUnique({
            where: {
                id: id,
            },
            include: {
                Marcacao: true,
                Manutencoes: true,
            },
        });
        if (response) {
            res.status(200).json(viatura);
        } else {
            res.status(404).json({ error: 'Not Found', msg: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', msg: error.message });
    }
};

exports.create = async (req, res) => {
    const { id,modelo,ano,proprietario} = req.body;
    try {
        const viatura = await prisma.viatura.create({
            data: {
                id: id,
                modelo: modelo,
                ano: ano,
                proprietario: proprietario
            },
        });
        res.status(201).json(viatura);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { id,modelo,ano,proprietario} = req.body;
    try {
        const viatura = await prisma.viatura.update({
            where: {
                id: id,
            },
            data: {
                modelo: modelo,
                ano: ano,
                proprietario: proprietario
            },
        });
        res.status(200).json(viatura);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};


exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.viatura.delete({
            where: {
                id: id,
            },
        });
        res.status(204).send(); // Using 204 No Content for successful deletion
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};
