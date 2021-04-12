module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    Usuario.associate = (models) => { //models recebe todos os models da pasta models
        //relação 1:N (usuário tem vários posts)
        Usuario.hasMany(models.Post, {as: "posts", foreignKey: 'usuarios_id'}) // cria relação de usuários com posts
    }

    return Usuario;
}