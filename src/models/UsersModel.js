export default function (sequelize, DataTypes) {
	const User = sequelize.define("User", {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			user_name: {
				type: DataTypes.STRING(64),
				allowNull: false,
			},
			user_email: {
				type: DataTypes.STRING(128),
				allowNull: false,
				unique: true,
			}
		},
		{
			tableName: "users",
			timestamps: false,
		})

	User.associate = (models) => {
		User.hasMany(models.Post, {foreignKey: 'user_id'})
	}

	return User
}
