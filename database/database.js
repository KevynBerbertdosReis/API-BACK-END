import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("loja", "root", null, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false
})

const testConnection = async () => {
    try{
        await sequelizeConnection.authenticate()
        console.log("Database connected sucessfully!")
} catch (error) {
    console.log ("Erro ao conectar ao banco de dados", error)
}
}

testConnection()

export default sequelizeConnection