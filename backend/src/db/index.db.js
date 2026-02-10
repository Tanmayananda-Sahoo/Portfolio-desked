import mongoose, { connect } from 'mongoose';

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.log('Error: ',error);
    }
}

export default connectDB;