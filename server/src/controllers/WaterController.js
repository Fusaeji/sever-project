const { Water } = require('../models')

module.exports = {

    // Get all waters
    async index(req, res) {
        try {
            const waters = await Water.findAll()
            res.send(waters)
        } catch (err) {
            res.status(500).send({
                error: 'The waters inforgmation was incorrect'
            })
        }
    },

    // Create water
    async create(req, res) {
        try {
            const water = await Water.create(req.body)
            res.send(water.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create water incorrect'
            })
        }
    },

    // Edit water
    async put(req, res) {
        try {
            await Water.update(req.body, {
                where: {
                    id: req.params.waterId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update water incorrect'
            })
        }
    },

    // Delete water
    async remove(req, res) {
        try {
            const water = await Water.findOne({
                where: {
                    id: req.params.waterId
                }
            })
            if (!water) {
                return res.status(403).send({
                    error: 'The water information was incorrect'
                })
            }
            await water.destroy()
            res.send(water)
        } catch (err) {
            res.status(500).send({
                error: 'The water information was incorrect'
            })
        }
    },

    // Show water by id
    async show(req, res) {
        try {
            const water = await Water.findByPk(req.params.waterId)
            res.send(water)
        } catch (err) {
            res.status(500).send({
                error: 'The water information was incorrect'
            })
        }
    }
}


