const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");
const compass_string = "mongodb://localhost:27017/pro_01";
const atlas_string =
  "mongodb+srv://abdulhamidmomoh1_db_user:Okerikume33@cluster0.mo1aqax.mongodb.net/pro_01?appName=Cluster0";

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose
  .connect(atlas_string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

const app = express();
const port = 5555;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is active");
});
app.use("/users", userRoute);
app.use("/products", productRoute);
app.listen(port, () => {
  console.log(`server is up and running on port : ${port}`);
});
