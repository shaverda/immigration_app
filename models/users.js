module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		// name: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	validate: {
		// 		len: [1, 160]
		// 	}
		// },
		// password: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	validate: {
		// 		len: [1]
		// 	}
		// },
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		userType: {
			type: DataTypes.STRING,
			defaultValue: 'immigrant',
		},
		completedSurvey: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});
	return User;
};
