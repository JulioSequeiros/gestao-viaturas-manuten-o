const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.update = async (req, res) => {
    const { name,id } = req.body;
    try {
        const categoria = await prisma.utilizador.update({
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

exports.update = async (req, res) => {
    const { email,id } = req.body;
    try {
        const categoria = await prisma.utilizador.update({
            where: {
                id: id,
            },
            data: {
                email: email,
            },
        });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { password,id } = req.body;
    try {
        const categoria = await prisma.utilizador.update({
            where: {
                id: id,
            },
            data: {
                password: password,
            },
        });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};