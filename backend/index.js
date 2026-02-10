import app from './app.js';
import connectDB from './src/db/index.db.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    })
})

