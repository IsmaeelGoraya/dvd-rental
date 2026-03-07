const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('film', {
    film_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255)
    },
    description: {
      type: DataTypes.TEXT
    },
    release_year: {
      type: DataTypes.INTEGER
    },
    language_id: {
      type: DataTypes.SMALLINT
    },
    rental_duration: {
      type: DataTypes.SMALLINT
    },
    rental_rate: {
      type: DataTypes.FLOAT
    },
    length: {
      type: DataTypes.SMALLINT
    },
    replacement_cost: {
      type: DataTypes.FLOAT
    },
    rating: {
      type: DataTypes.STRING(10)
    },
    last_update: {
      type: DataTypes.DATE
    },
    special_features: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    fulltext: {
      type: DataTypes.TSVECTOR
    }
  }, {
    tableName: 'film',   // 👈 VERY IMPORTANT
    timestamps: false,
    freezeTableName: true // 👈 prevents pluralization
  });
};