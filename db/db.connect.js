import mongoose from "mongoose";

const instantiateConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to db established.");
  } catch (error) {
    console.log("Connection to database failed!", error);
  }
};

export default instantiateConnection;
