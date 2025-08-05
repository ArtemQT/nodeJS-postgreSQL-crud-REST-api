import UsersModel from "../models/usersModel.js";

export default class UsersController {

	static async getAllUsers(req, res) {
		try {
			const usersList = await UsersModel.getAllUsers();
			return res.status(200).json(usersList);
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async getUser(req, res) {
		try {
			const { id } = req.params;
			const user = await UsersModel.getUserById(id.toString());

			if (!user.length) {
				res.status(404).send({error: 'User not found'});
			}
			res.status(200).json(user);
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async createUser(req, res) {
		try {
			const { user_name, user_email } = req.body;

			const candidate = await UsersModel.getUserByEmail(user_email);
			const isUserExists = candidate.length > 0;

			if (isUserExists) {
				res.status(409).json({error: `User with email ${user_email} already exists`});
			}

			const user = {
				user_name,
				user_email,
			}
			await UsersModel.createUser(user);
			return res.status(201).json({message: "User successfully created"});
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async updateUser(req, res) {

	}

	static async deleteUser(req, res) {

	}
}