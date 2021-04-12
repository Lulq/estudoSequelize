const {Usuario, Post, Comentario, sequelize} = require('./models')
const { Op } = require('sequelize')


// busca todos os usuários do banco de dado e traz em uma tabela
// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// })

// // busca todos os posts e traz em uma tabela
// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// })

// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// })

// Post.findOne({
//     where: {
//         id: '1'
//     }
// })
// .then((resultado) => {
//     console.log(resultado)
// })

// Comentario.findByPk(4)
// .then((resultado) => {
//     console.log(resultado)
// })

// Post.findAll({
//     where: {
//         texto: {[Op.like]: '%oi%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(post => post.toJSON()))
// })


// Usuario.findAll({
//     order: [
//         ['nome', 'ASC']
//     ],
//     limit: 2, // maximo de resultados pra exibir
//     offset: 2 // exibe resultados a partir do terceiro
// })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()))
// })

// buscar todos os usuários que tem A no nome
// Usuario.findAll({
//     where: {
//                 nome: {[Op.like]: '%a%'}
//            }
//     })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()))
// })

// //buscar todos os usuários que não tem a letra A no nome
// Usuario.findAll({
//     where: {
//                 nome: {[Op.notLike]: '%a%'}
//            }
//     })
// .then((resultado) => {
//     console.log(resultado.map(usuario => usuario.toJSON()))
// })

// buscar todos os posts e retornar 2 por vez

var pulo = 0
while(totUser < 4){
Usuario.findAll({
    order: [
        ['nome', 'ASC']
    ],
    limit: 2, 
    offset: pulo
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()))
})
pulo += 2

}








// // função Nereu
// const consultaBanco = async (model, consulta, valor,coluna) => {
//     await consulta(model, valor, caluna);
// }