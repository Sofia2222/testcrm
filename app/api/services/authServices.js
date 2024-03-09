const User = require( '../../database/models/auth/UserOptions');
const m = require('../../database/migrations/20240211124552-general_database');
const {queryInterface} = require('sequelize')

class AuthServices {
    async login(){
        await m.up(queryInterface)
        const user = User.findAll();
        console.log(user)
    }
    authentication(){};
    logout(){};
}

module.exports = new AuthServices();