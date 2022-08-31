const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/task");
const error = require("./middleware/not_found");
const errorhandler = require("./middleware/error_handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use(error);
app.use(errorhandler);

// app.get("/api/v1/tasks", (req, res) => {});

// app.post("/api/v1/tasks", (req, res) => {});

// app.get("/api/v1/tasks/:id", (req, res) => {});

// app.patch("/api/v1/tasks/:id", (req, res) => {});

// app.delete("/api/v1/tasks/:id", (req, res) => {});

const port = process.env.PORT || 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();