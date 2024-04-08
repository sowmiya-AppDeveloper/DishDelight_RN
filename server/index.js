require("dotenv").config();
const express = require("express");
const cors = require("cors"); //Origin Resource Sharing
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const http = require("http").createServer(app);

// db connection
mongoose.set("strictQuery", false); // required for version 6
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(
  "/api/home/bi1466/sowmiya/DisDelightAssets",
  express.static("/home/bi1466/sowmiya/DisDelightAssets")
);

// route middlewares
app.use("/api", authRoutes);
const port = process.env.PORT || 8002;

http.listen(port, () => console.log("Server running on port", port));
