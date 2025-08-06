
export default function (sequelize, DataTypes) {
	const Post = sequelize.define('Post', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		post: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},{
		tableName: 'posts',
		timestamps: false,
	})

	Post.associate = (models) => {
		Post.belongsTo(models.User, {foreignKey: 'user_id'})
	}

	return Post
}