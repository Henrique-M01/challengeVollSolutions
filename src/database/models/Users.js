import { DataTypes } from 'sequelize/types';

const userAttributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  email : {
    allowNull: false,
    type: DataTypes.STRING
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING
  },

  role: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

module.exports = (sequelize) => {
  const User = sequelize.define(
    'user',
    userAttributes,
    {
      timestamps: false,
      tableName: 'users',
    },
  );

  User.associate = (models) => {
    User.hasOne(models.wallet, { foreignKey: 'id', as: 'wallet'})
  }

  return User;
};