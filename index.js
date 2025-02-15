const express = require("express");
const mongoose = require("mongoose");
const userRouter  = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", userRouter);

// Catch-All Route Handler
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.use("/*", errorHandler);

async function main(){
    mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected");

    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);  
    });
}

main();