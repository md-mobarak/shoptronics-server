const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const app = express();
dotenv.config();

// middleWare
app.use(cors());
app.use(express.json());

// database connected
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

// API create for CRUD operation
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const cartRouter = require("./routers/cartRouter");
const errorHandler = require("./errorHandler/errorHandler");
// API

app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

// Global error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}!`);
});
