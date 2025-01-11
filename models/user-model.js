import {DataTypes} from "sequelize";
import sequelizeConnection from "../database/database.js";

const User = sequelizeConnection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: true
},
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
},

    lastName: {
        type: DataTypes.STRING,
        allowNull: true
},

    email: {
        type: DataTypes.STRING,
        allowNull: true
    }

})

export default User