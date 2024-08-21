import mongoose from "mongoose";

const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected");
    } catch (error) {
        console.log("db connection error", error);
    }
}

export default connection