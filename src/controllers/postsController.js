import PostsModel from "../models/postsModel.js";

export default class PostsController {

	static async getAllPosts(req, res) {
		try {
			let { id } = req.query;
			id = Number(id)

			const posts = await PostsModel.getAllPosts(id);
			res.status(200).json(posts);
		} catch (err) {
			res.status(500).send({error: err.message});
		}

	}

	static async createPost(req, res) {
		try {
			let { id } = req.query;
			id = Number(id)
			const {post} = req.body;

			await PostsModel.createPost(id, post);
			res.status(201).json({message: `Post successfully created`});
		} catch (err) {
			res.status(500).send({error: err.message});
		}
	}
}