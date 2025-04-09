import mongoose from 'mongoose';

const Connection = async () => {
    const mongo_url = process.env.MONGO_URL;

    if (!mongo_url) {
        console.log('❌ MONGO_URL is not defined. Please check your environment variables.');
        return;
    }

    try {
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ MongoDB connected successfully');

    } catch (error) {
        console.log('❌ Error while connecting to MongoDB:', error);
    }
};

export default Connection;
