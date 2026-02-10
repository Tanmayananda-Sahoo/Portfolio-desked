import express from 'express';
import userRouter from './src/routes/user.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded());
app.use(cors({
    origin: `${process.env.FRONTEND_URI}`,
    credentials: true
}))
app.use('/user',userRouter);

export default app;