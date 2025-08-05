import pool from "../services/dbService.js";

export default class PostsModel {

	static async getAllPosts(user_id) {
		const client = await pool.connect()
		try {
			const data = await client.query(`
                SELECT * FROM posts
                WHERE user_id = $1
			`, [user_id])

			return data.rows;
		} catch (err) {
			throw err;
		} finally {
			await client.release();
		}
	}

	static async createPost(user_id, post) {
		const client = await pool.connect()
		try {
			await client.query(`
				INSERT INTO posts (user_id, post)
				VALUES ($1, $2)
			`, [user_id, post])
		} catch (err) {
			throw err;
 		} finally {
			await client.release();
		}
	}
}