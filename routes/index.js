const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//var router = express.Router();

//const admin = require('./admin');
const app = express();

const Admin1 = require("./admin");
//const Table = require('./tableno');
//const Reservation = require('./reservation');
const Customer = require("./customer");
//const Menu = require('./menu');
//const Tableno1 = require('./tableno');

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/health", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.log("Cannot Connect to the Database", err);
    process.exit();
  });

app.use("/admin", Admin1);
//app.use("/menu", Menu);
//app.use("/reservation", Reservation);
//app.use("/tableno", Tableno1);
app.use("/customer", Customer);

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
