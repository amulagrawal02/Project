const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Sucessfully connected to database");
  } catch (err) {
    console.log("enable to connect with database", err);
  }
};

module.exports = connectDB;
