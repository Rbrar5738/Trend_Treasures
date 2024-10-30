const mongoose = require("mongoose");

// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const mongoDbUrl =
  "mongodb+srv://inboxbrar:noorbrar@cluster0.t18qolq.mongodb.net/trendtreasures?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
