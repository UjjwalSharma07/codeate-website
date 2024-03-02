import mongoose from 'mongoose';
const connectDB = handler =>  async (req,res) => {
    if(mongoose.connections[0].readyState){
        console.log('Already connected');
        return;
    }
    await mongoose.connect(process.env.MONGO_URI)
    return console.log('Connected to DB');
}
export default connectDB;