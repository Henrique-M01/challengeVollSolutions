import { DataTypes } from 'sequelize/types';

const walletAttributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  quantity: {
    allowNull: false,
    type: Sequelize.INTEGER,
  }
};

module.exports = (sequelize) => {
  const Wallet = sequelize.define(
    'wallet',
    walletAttributes,
    {
      timestamps: false,
      tableName: 'wallet',
    },
  );

  Wallet.associate = (models) => {
    Wallet.hasOne(models.Users, { foreignKey: 'userId', as: 'users' })
  }

  return Wallet;
};
