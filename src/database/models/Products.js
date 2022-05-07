import { DataTypes } from 'sequelize/types';

const productsAttributes = {
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

  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  quantity: {
    allowNull:false,
    type: DataTypes.INTEGER
  }
}

module.exports = (sequelize) => {
  const Products = sequelize.define(
    'products',
    productsAttributes,
    {
      timestamps: false,
      tableName: 'products',
    },
  );

  return Products;
};
