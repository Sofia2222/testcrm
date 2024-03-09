const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../');

class Company extends Model
{

}

const model = Company.init({
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    domain: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: sequelize,
    tableName: 'companies',
    timestamps: false
});

module.exports = model;