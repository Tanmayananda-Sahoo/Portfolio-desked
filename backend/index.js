import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})

import app from './app.js';
import connectDB from './src/db/index.db.js';


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App is running on port ${process.env.PORT}`);
    })
})

