require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Make sure you have this line
const app = express();
require("./db/conn");
const router = require("./routes/router");

const port = process.env.PORT || 8005;
app.use(cors())

 
  
// Other middlewares
app.use(express.json());
app.use(router);

app.use("/uploads", express.static("./uploads"));
app.use("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
