const express = require("express");
const app = express();
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const dbConnnection = require("./db/connection");
const cors = require('cors');
const port = process.env.PORT || 3002

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static('./images'))
// TODO: Config cors after deployment with front end URL
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));
app.use(cors())

app.use("/api", routes);

dbConnnection.on("connected", () => {
  console.log("Database connected");
  app.listen(port, () => {
    console.log(`Server listening on ${port}!`);
  });
});
