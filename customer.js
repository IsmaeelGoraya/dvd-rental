const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('customer', {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    store_id: {
      type: DataTypes.SMALLINT
    },
    first_name: {
      type: DataTypes.STRING(45)
    },
    last_name: {
      type: DataTypes.STRING(45)
    },
    email: {
      type: DataTypes.STRING(50)
    },
    address_id: {
      type: DataTypes.SMALLINT
    },
    activebool: {
      type: DataTypes.BOOLEAN
    },
    create_date: {
      type: DataTypes.DATE
    },
    last_update: {
      type: DataTypes.DATE
    },
    last_active: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'customer',
    timestamps: false
  });
};