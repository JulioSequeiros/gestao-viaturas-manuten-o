const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const users = await prisma.utilizador.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
            },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    try {
        const users = await prisma.utilizador.update({
            where: {
                id: Number(id),
            },
            data: {
                email: email,
            },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { password } = req.body;
    const { id } = req.params;
    try {
        const users = await prisma.utilizador.update({
            where: {
                id: Number(id),
            },
            data: {
                password: bcrypt.hashSync(password, 8),
            },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};