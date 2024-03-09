const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../');


class Token extends Model{

}

const model = Token.init({
    user_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    get_order: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
},{
    sequelize: sequelize,
    tableName: 'tokens'
});

module.exports = model