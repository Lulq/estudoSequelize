const {Usuario, Post, Comentario, sequelize} = require('./models')


Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()))

})

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()))
})

Comentario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()))
})

Post.findOne({
    where: {
        id: '1'
    }
})
.then((resultado) => {
    console.log(resultado)
})

Comentario.findByPk(4)
.then((resultado) => {
    console.log(resultado)
})