const {DataTypes} = require('sequelize')

async function up (queryInterface) {
  await queryInterface.createTable('companies', {
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
  })
  await queryInterface.createTable('users', {
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
      allowNull: false
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
  })

  await queryInterface.createTable('user_options', {
    user_id: {
      type: DataTypes.INTEGER,
      unique: true

    },
    get_order: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })

  await queryInterface.createTable('tokens', {
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
  })

  await queryInterface.addConstraint('users', {
    fields: ['company_id'],
    type: 'foreign key',
    name: 'users_companies',
    references: {table: 'companies', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
  await queryInterface.addConstraint('user_options', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'users_user_options',
    references: {table: 'users', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
  await queryInterface.addConstraint('tokens', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'tokens_users',
    references: {table: 'users', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}


async function down (queryInterface) {
  await queryInterface.removeConstraint('tokens', 'tokens_users')
  await queryInterface.dropTable('tokens');
  await queryInterface.removeConstraint('user_options', 'users_user_options')
  await queryInterface.dropTable('user_options');
  await queryInterface.removeConstraint('users', 'users_companies')
  await queryInterface.dropTable('users');
  await queryInterface.dropTable('companies');
}

module.exports = {
  up,
  down
}
