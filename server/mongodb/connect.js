import mongoose from "mongoose";

const connectDB = async () => {
    const db = process.env.MONGODB_URL
    console.log(db)
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;