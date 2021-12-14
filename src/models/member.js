const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.expedition);
    }
  }
  member.init({
    name: {
      type: DataTypes.STRING,
    },
    agency: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    expeditionId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'member',
  });
  return member;
};
