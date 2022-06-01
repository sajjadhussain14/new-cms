const mongoose = require("mongoose");

const connectMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/Builder", {
      useNewUrlParser: true,
    })
    .then(() => console.log("Now connected to MongoDB!"))
    .catch((err) => console.error("Something went wrong", err));
};

const checkMongoConnected = async (req, res) => {
  mongoose.connect("mongodb://localhost:27017/Builder", function (error) {
    // Do things once connected
    if (error) {
      return res.send("Database error or database connection error " + error);
    }

    let status = "";
    if (mongoose.connection.readyState == 0) {
      status = "Disconnected";
    } else if (mongoose.connection.readyState == 1) {
      status = "Connected";
    } else if (mongoose.connection.readyState == 2) {
      status = "Connecting";
    } else if (mongoose.connection.readyState == 3) {
      status = "Disconnecting";
    }
    return res.send("Database is " + status);
    // 0 disconnected, 1 connected, 2 connecting, 3 disconnecting
  });
};

module.exports = { connectMongoose, checkMongoConnected };
