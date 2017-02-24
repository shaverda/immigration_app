module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 160]
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		userType: {
			type: DataTypes.STRING,
			defaultValue: 'immigrant',
		}
	});
	return user;
};
