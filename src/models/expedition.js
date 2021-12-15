const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class expedition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.member);
    }
  }
  expedition.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
    endDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
      },
    },
    patch: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'expedition',
  });
  return expedition;
};
