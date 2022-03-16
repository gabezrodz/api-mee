//const Sequelize = require("sequelize");
const { Plantas, Cuidados } = require("../models");


const produtoController = {

    listarTodasPlantas: async (req, res) => {
        const listaTodasPlantas = await Plantas.findAll({
            include: Cuidados
        });

        res.json(listaTodasPlantas);
        //res.json([{ nome: "Produto1"}, { nome: "Produto2"}]);
    },

    listarUmaPlanta: async (req,res) => {
        const listeiUmaPlanta = await Plantas.findByPk(req.params.id)
        res.json(listeiUmaPlanta);
    }, 

    /*listarCategorias: async (req,res) => {
        const listeiCategorias = await Categorias.findAll()
        res.json(listeiCategorias);
    },*/


}

module.exports = produtoController;