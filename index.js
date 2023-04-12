const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
const stripe = require("stripe")(
  "sk_test_51L3aalI91qInqKJOjqrv5C7v73NmLC1eucz4fqlDxqpAOBSGWMYsOfnqJKUIANqqsLu1y53klIoQ9TeOdAHUAmLH00TPzCOdL5"
);
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
const paymentRoute = require("./routers/paymentRoute");
const errorHandler = require("./errorHandler/errorHandler");
// API

app.use("/cart", cartRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/payment", paymentRoute);

// Global error handler middleware
app.use(errorHandler);

// stripe payment method api
app.post("/create-payment-intent", async (req, res) => {
  const { totalPrice } = req.body;
  try {
    const amount = totalPrice * 100;
    // const email = req.body.email;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: amount,
      payment_method_types: ["card"],
    });
    // console.log("Payment", paymentIntent);
    res.json({
      message: "Payment was successful",
      success: true,
      paymentIntent: paymentIntent,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}!`);
});
