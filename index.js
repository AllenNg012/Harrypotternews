require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Make sure you have this line
const app = express();
require("./db/conn");
const router = require("./routes/router");

const port = process.env.PORT || 8005;

// CORS options to allow specific domain
const corsOptions = {
  origin: [ "https://harrypotternews-frontend.vercel.app" ],
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  Credentials: true
};
var cors = require('cors');
// Use CORS middleware with the options
//testing
  app.use(cors(corsOptions));

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
