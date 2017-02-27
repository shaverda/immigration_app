module.exports = function(sequelize, DataTypes) {
	var Survey = sequelize.define('Survey', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		question1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		question2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		question3: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},

	{
      	classMethods: {
        	associate: function(models) { //I commented this all out for now cuz it was messin' me up. Sorry ):
          		// Survey.belongsTo(models.User, {
            // 		foreignKey: {
            //   			allowNull: false
            // 		}
          		// }); 
        	}
      	}
    });
	return Survey;
};
