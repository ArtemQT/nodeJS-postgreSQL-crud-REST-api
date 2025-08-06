import {Post, User} from "../models/index.js";

export default class PostsController {

	static async getAllPosts(req, res) {
		try {
			let {id} = req.query;
			id = Number(id)

			const posts = await Post.findAll({
				where: {
					user_id: id,
				},
				include: [
					{
						model: User,
						attributes: ['user_name']
					}
				]
			});
			res.status(200).json(posts);
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}

	static async createPost(req, res) {
		try {
			let {id} = req.query;
			id = Number(id)
			const {post} = req.body;

			await Post.create({
					user_id: id,
					post: post,
				},
				{
					where: {
						user_id: id,
					}
				}
			);
			res.status(201).json({message: `Post successfully created`});
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}
}