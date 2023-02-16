const express = require('express')
const path = require('path')
const {connect} = require('./models')

const pokemonsRouter = require('./routes/pokemons')

const app = express()

//configurando ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//declarando rotas
app.use('/pokemons', pokemonsRouter)

app.listen(3000, () => {
    connect()

    console.log('server running')
})