import mongoose from 'mongoose';
import dotenv from 'dotenv';

const Connection = async () => {
    try {
        dotenv.config();
        const mongo_url = process.env.MONGO_URL;
        const connection =    await mongoose.connect(mongo_url);
        if (connection) {
            console.log('MongoDB connected successfully');
        }
        
        
    } catch (error) {
        console.log(error);
    }
}

export default Connection;