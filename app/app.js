require('dotenv').config();
const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

const app = express();

// app.use(cors());
app.use(cookieParser());
app.use(express.json())

const start = async () => {
    app.listen(()=>{console.log(`server start on ${PORT} port`)})
}

start()