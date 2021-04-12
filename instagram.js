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


// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }


// CRUD


// Usuario.create({
//     nome: 'Iago',
//     email: 'iago@digitalhouse.com',
//     senha: 'dev123'

// }).then((resultado) => {
//     console.log(resultado.toJSON());
// })

// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id:5
//     }
// }).then((resultado) => {
//     console.log(resultado)
// })

// Usuario.destroy({
//     where: {
//         id: 5
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })



// Usuario.findAll().then((usuarios) => {
//     console.log(usuarios.map((usuario) => usuario.toJSON()))
// })



// desafio CRUD

// Usuario.bulkCreate([{
//     nome: 'Renata Cavalcanti',
//     email: 'aenata@avanacle.com',
//     senha: '123456'

// },{
//     nome: 'Ludmylla Valadares',
//     email: 'ludmylla@avanacle.com',
//     senha: '123456'

// },{
//     nome: 'Miguel Leite',
//     email: 'miguel@avanacle.com',
//     senha: '123456'

// },{
//     nome: 'Geisiane Martins',
//     email: 'geisiane@avanacle.com',
//     senha: '123456'

// },{
//     nome: 'Lenildo Lourenço',
//     email: 'lenildo@avanacle.com',
//     senha: '123456'

// }]
// ).then((resultado) => {
//     // console.log(resultado.toJSON());
// })



// Usuario.create({
//     nome: 'Ludmylla Valadares',
//     email: 'ludmylla@avanacle.com',
//     senha: '123456'

// }).then((resultado) => {
//     console.log(resultado.toJSON());
// })

//{ returning: true } pra retornar tudo que foi criado no bulkCreate

// Usuario.destroy({
//     where: {
//         id: [13,14,15,16]
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// crie um post relaionado ao seu usuario.

// Post.create({
//     texto: 'Urubu tem pena no pé.',
//     usuarios_id: 17
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// })

// Atualize o email do usuario 'Sergio' para 'sergio@digitalhouse.com'


// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id:2
//     }
// }).then((resultado) => {
//     console.log(resultado)
// })

// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()))
// })

// Post.findAll().then((posts) => {
//     console.table(posts.map((post) => post.toJSON()))
// })


// // função Nereu
// const consultaBanco = async (model, consulta, valor,coluna) => {
//     await consulta(model, valor, caluna);
// }

// testando o associate jeito da Hendy

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
    
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
// })

// outro jeito

// Usuario.findByPk(1,{include:['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON())
//         sequelize.close()
//     }
// )


Post.findByPk(1, {
  include: [ {association: 'comentarios'} ]
}).then((post) => {
  console.table(post.comentarios.map((comentario) => comentario.toJSON()));
});