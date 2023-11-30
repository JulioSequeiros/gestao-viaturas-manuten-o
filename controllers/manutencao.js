const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await prisma.manutencao.findUnique({
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
    const { descricao,data,custo,categoriaId,viaturaId} = req.body;
    try {
        const manutencao = await prisma.manutencao.create({
            data: {
                descricao: descricao,
                datas: data,
                custo: custo,
                categoriaId: Number(categoriaId),
                viaturaId: Number(viaturaId)
            },
        });
        res.status(201).json(manutencao);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};

exports.update = async (req, res) => {
    const { descricao,data,custo } = req.body;
    const id = req.params.id;
    try {
        const manutencao = await prisma.manutencao.update({
            where: {
                id: Number(id),
            },
            data: {
                descricao: descricao,
                datas: data,
                custo: custo
            },
        });
        res.status(200).json(manutencao);
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};


exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.manutencao.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(204).send(); // Using 204 No Content for successful deletion
    } catch (error) {
        res.status(400).json({ error: 'Bad Request', msg: error.message });
    }
};
