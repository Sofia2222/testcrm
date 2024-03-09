const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../');


class Token extends Model{

}

const model = Token.init({
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fingerprint: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: sequelize,
    tableName: 'tokens'
});

module.exports = model;