import mongoose from "mongoose";
import "dotenv/config";

const dbFunction = {
  connectToDb: async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
    } catch (error) {
      console.log(error);
    }
  },
};

export default dbFunction;
