const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        //const data = req.body;
        const { name, email, whatsapp, city, uf } = req.body; // Desestruturação, valores salvos em variáveis separadas
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return res.json({ id });
    }
};