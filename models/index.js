const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const PokemonSchema = require('./pokemon')

const Pokemon = mongoose.model('Pokemon', PokemonSchema)

const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/pokedex')

    console.log('DataBase is connect')
}

module.exports = {
    Pokemon,
    connect
}