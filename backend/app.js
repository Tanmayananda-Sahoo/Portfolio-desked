import express from 'express';
import userRouter from './src/routes/user.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use('/user',userRouter);

export default app;