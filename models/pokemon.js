const { Schema } = require('mongoose')

const Pokemon = new Schema({
    id: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    altura: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true,
        min: 0
    },
    imagem: {
        type: String,
        required: true,
        validate: {
            validator: (valor) => {
                return valor && valor.startsWith('http')
            } ,
            massege: () => 'A imagem deve ser uma URL'
        }
    },
    ataques: {
        type: String,
        required: true
    },

    estatisticas: {
        type: Object,
        required: true
    }
})

module.exports = Pokemon