module.exports = function(sequelize, DataTypes) {
	var Survey = sequelize.define('Survey', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		middle_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		apt_no: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false 
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: false
		},
		date_of_birth: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country_of_birth: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country_of_citizenship: {
			type: DataTypes.STRING,
			allowNull: false
		},
		social_security_num: {
			type: DataTypes.STRING,
			allowNull: true
		},
		a_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date_of_last_arrival: {
			type: DataTypes.STRING,
			allowNull: false
		},
		i94_arrival_departure_record_number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		current_uscis_status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status_expires_on: {
			type: DataTypes.STRING,
			allowNull: false
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
