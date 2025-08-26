import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to database`);
  });
};

export default connect;
