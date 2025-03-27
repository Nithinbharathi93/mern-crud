import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
console.log("'sup dude..?")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected at ${conn.connection.host}`);
    } catch (error) {
        console.log(`Database connection error: ${error}`);
        process.exit(0);
    }
}

export default connectDB;