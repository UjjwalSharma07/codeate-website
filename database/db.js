import mongoose from "mongoose";

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://codeate8:ijO0bdP5wa6Nospr@code8cluster1.tzlgq.mongodb.net/code8-next-app?retryWrites=true&w=majority"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
