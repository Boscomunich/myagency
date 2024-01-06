
import mongoose from 'mongoose';

let isConnected = false;
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        if(isConnected) {
        return 'connected'
        }
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true
        return 'connected'
    } catch (error) {
        console.log(error)
    }
}