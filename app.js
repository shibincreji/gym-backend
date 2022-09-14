const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const Admin = require("./routes/admin");

const Customer = require("./routes/customer");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://shibincreji:Shibin%4024@gym.uphqlxm.mongodb.net/gym",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot Connect to the database", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello DB connected!",
  });
});

app.use("/admin", Admin);
app.use("/customer", Customer);

//PORT
const port = process.env.PORT || 5000;

//Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
