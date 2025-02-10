require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");

const corsOptions = {
    origin: [
      "https://harrypotternews-frontend.vercel.app",
      "https://harrypotternews-frontend-git-master-chunghinngs-projects.vercel.app",
      "https://harrypotternews-frontend-chunghinngs-projects.vercel.app",
      "https://harrypotternews-server.vercel.app", 
      "https://harrypotternews-server-chunghinngs-projects.vercel.app", 
      "https://harrypotternews-server-git-master-chunghinngs-projects.vercel.app"
    ],  // List all your frontend and backend URLs here
    methods: ["GET", "POST", "DELETE", "PUT"],  // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"],  // Allowed headers
  };
  
  app.use(cors(corsOptions));  // Apply the CORS configuration to the backend
  


app.use(express.json());
app.use(cors())
app.use(router);

app.use("/uploads",express.static("./uploads"));
app.use("/", (req, res) => {
    res.send("Server is running.");
  });

app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})

