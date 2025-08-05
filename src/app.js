import express from "express";
import pool from "./services/dbService.js";
import usersRouter from "./routes/usersRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users' ,usersRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));