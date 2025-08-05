import express from "express";
import usersRouter from "./routes/usersRoute.js";
import postsRouter from "./routes/postsRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users' ,usersRouter);
app.use('/api/posts' ,postsRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));