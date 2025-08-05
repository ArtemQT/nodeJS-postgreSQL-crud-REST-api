import {Router} from "express";
import PostsController from "../controllers/postsController.js";

const postsRouter = Router();

postsRouter.get('/', PostsController.getAllPosts);
postsRouter.post('/', PostsController.createPost);

export default postsRouter;