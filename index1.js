const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../FOOD WEBSITE 2/routes/routes");
const routeRouter = require("../FOOD WEBSITE 2/routes/app");
// const bookingData = require("../routes/booking")

app.use(loginData);
app.use(routeRouter);
// app.use(bookingData);

app.listen(3030, ()=>{
    console.log("Server Started  in 3030");
})