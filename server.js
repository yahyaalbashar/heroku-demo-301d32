"use strict";

const expres=require("express");
const app=expres();
const cors=require("cors");
require("dotenv").config();
const PORT=process.env.PORT
app.use(cors());
app.get("/",(req,res)=>{

    res.status(200).json({
        "message":"Hello Heroku"
    })
})
app.listen(PORT);