//Importing Packages
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const Env = require("dotenv")

const app = express();
const PORT = process.env.PORT || 5000;
const Database = require("./Database/Database.js");
const Router = require("./RouterMux.js");
//require("./utils/passport.config.js");
app.use(express.json());
app.use(cookieParser());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Router);

//Initializing Database
Database.InitializeDatabase();
app.listen(PORT, () => {
    console.log(new Date().toString() + "App Service Connected "+PORT);
});