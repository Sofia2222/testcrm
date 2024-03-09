const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../');
const Company = require( './Company');
const Token = require( './Token');
const UserOptions = require( './UserOptions');

class User extends Model{

}

const model = User.init({
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: sequelize,
    tableName: 'users',
    timestamps: false
});

Company.hasMany(model, {as: 'companies', foreignKey: '_id'})
model.hasOne(UserOptions, {as: 'options', foreignKey: 'user_id'})
model.hasMany(Token, {as: 'tokens', foreignKey: 'user_id'});

module.exports = model;