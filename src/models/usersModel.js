import pool from "../services/dbService.js";

export default class UsersModel {

	static async getAllUsers() {
		const client = await pool.connect();
		try {
			const data = await client.query(`SELECT *
                                             FROM users`);
			return data.rows;
		} catch (err) {
			throw err;
		} finally {
			await client.release();
		}
	}

	static async getUserById(id) {
		const client = await pool.connect();
		try {
			const data = await client.query(`
				SELECT * FROM users
				WHERE id=$1
			`, [id])
			return data.rows;
		} catch (err) {
			throw err;
		} finally {
			await client.release();
		}
	}

	static async getUserByEmail(email) {
		const client = await pool.connect();
		try {
			const data = await client.query(`
				SELECT * FROM users
				WHERE user_email=$1
			`, [email])
			return data.rows;
		} catch (err) {
			throw err;
		} finally {
			await client.release();
		}
	}

	static async createUser(user) {
		const client = await pool.connect();
		try {
			await client.query(`
				INSERT INTO users(user_name, user_email)
				VALUES ($1, $2)
			`,
				[user.user_name, user.user_email]
			)
		} catch (err) {
			throw err;
		} finally {
			await client.release();
		}
	}

}