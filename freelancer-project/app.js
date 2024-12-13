const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const flash = require("connect-flash");

const indexControllers = require("./controllers/photoControllers");

const app = express();
//ConnectDB
mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
  console.log("DB Connected Successfuly");
});

app.set("view engine", "ejs");

app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessage = req.flash();
  next();
});
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static("./photos"));
app.use(indexControllers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server started on ", port));
