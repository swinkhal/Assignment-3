const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.DATABASE_URI ||
      "mongodb+srv://digisoul:dbuser123@ds-cluster.pnswsy5.mongodb.net/web15",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("MongoDB - Connection successful!");
  })
  .catch((err) => {
    console.log("Unable to establish connection... ");
  });

const dbConnnection = mongoose.connection;

dbConnnection.on("error", (err) => {
  console.log("Unable to connect to database");
});

module.exports = dbConnnection;
