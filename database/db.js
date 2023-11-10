const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
  .connect(
    "mongodb+srv://root:admin@cluster0.kx6jzc4.mongodb.net/?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
};

module.exports = connectToDb;
