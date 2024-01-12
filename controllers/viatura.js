const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
    try {
        const response = await prisma.viatura.findMany({include: {proprietario: true}});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', msg: error.message });
    }
};


exports.getAllByOwnerId = async (req, res) => {
    try {
        const ownerId = req.params.ownerid;

        const response = await prisma.viatura.findMany({include: {proprietario: true}, where : {proprietarioId : Number(ownerId)}});
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', msg: error.message });
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await prisma.viatura.findUnique({
            where: {
                id: Number(id),
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
    const { modelo,marca,ano,proprietarioId} = req.body;
    try {
        const viatura = await prisma.viatura.create({
            data: {
                modelo: modelo,
                marca: marca,
                ano: ano,
                proprietarioId: Number(proprietarioId)
            },
        });
        res.status(201).json(viatura);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const {modelo,marca,ano} = req.body;
    const id = req.params.id
    try {
        const viatura = await prisma.viatura.update({
            where: {
                id: Number(id),
            },
            data: {
                modelo: modelo,
                marca: marca,
                ano: ano
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
