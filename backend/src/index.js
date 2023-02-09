require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const usersRoute = require("./routes/user.route");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", usersRoute);

app.listen(PORT, async (err, data) => {
  await connectDB();
  console.log(`Listening to http://localhost:${PORT}`);
});
