import {User} from "../models/index.js";

export default class UsersController {

	static async getAllUsers(req, res) {
		try {
			const usersList = await User.findAll();
			return res.status(200).json(usersList);
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async getUser(req, res) {
		try {
			const { id } = req.params;

			const user = await User.findByPk(+id);

			if (!user) {
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

			const candidate = await User.findOne({
				where: {
					user_email: user_email,
				}
			});

			if (candidate) {
				return res.status(409).json({error: `User with email ${user_email} already exists`});
			}

			const user = {
				user_name,
				user_email,
			}

			await User.create(user);
			return res.status(201).json({message: "User successfully created"});
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async updateUser(req, res) {
		try {
			let { id } = req.params;
			id = Number(id);
			const { user_name, user_email } = req.body;

			const candidate = await User.findByPk(id);
			if (!candidate) {
				res.status(404).send({error: `User with id ${id} does not exist`});
			}

			if (user_email && candidate.user_email !== user_email) {
				const isEmailExists = await User.findOne({
					where: {
						user_email: user_email,
					}
				});
				if (isEmailExists) {
					res.status(409).send({error: `User with email ${user_email} already exists`});
				}
			}

			const user = {
				id: candidate.id,
				user_name: user_name || candidate.user_name,
				user_email: user_email || candidate.user_email,
			}

			await User.update(user, {
				where: {
					id: id
				}
			});
			res.status(201).json({message: "User successfully updated"});
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async deleteUser(req, res) {
		try {
			let { id } = req.params;
			id = Number(id);

			const candidate = await User.findByPk(id);
			if (!candidate) {
				res.status(404).send({error: `User with id ${id} does not exist`});
			}

			await User.destroy({
				where: {
					id: id
				}
			})
			res.status(200).json({message: "User successfully deleted"});
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}
}