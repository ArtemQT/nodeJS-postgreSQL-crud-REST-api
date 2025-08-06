import dotenv from "dotenv";
import {Sequelize, DataTypes} from "sequelize";

import UserFunc from './UsersModel.js'
import PostFunc from './PostsModel.js'

dotenv.config();

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		logging: false
	})

const User = UserFunc(sequelize, DataTypes);
const Post = PostFunc(sequelize, DataTypes);

User.associate(sequelize.models);
Post.associate(sequelize.models);

export {
	sequelize,
	User,
	Post,
}
