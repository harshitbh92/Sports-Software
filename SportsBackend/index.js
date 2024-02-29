const express = require('express');
const app = express();
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 4000;
const morgan = require('morgan'); // to see a requests made in the console.
const cors = require("cors");
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');


app.use(cors());

const userRouter = require("./routes/userRoute");
const QueryRouter = require("./routes/QueryRoute");

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api/user", userRouter);
app.use("/api/query",QueryRouter);

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})