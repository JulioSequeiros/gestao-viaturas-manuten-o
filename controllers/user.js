const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await prisma.utilizador.findUnique({
            where: {
                id: id,
            },
            include: {
                viaturas: true,
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

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const users = await prisma.utilizador.update({
            where: {
                id: parseInt(id),
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
    const { email,id } = req.body;
    try {
        const users = await prisma.utilizador.update({
            where: {
                id: id,
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
    const { password,id } = req.body;
    try {
        const users = await prisma.utilizador.update({
            where: {
                id: id,
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