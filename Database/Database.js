//Importing Packages
const Mongoose = require("mongoose");
const path = require("path");
const Env = require("dotenv").config({ path: require("find-config")(".env") });
exports.InitializeDatabase = async () => {
    try {
        await Mongoose.connect(
            "mongodb+srv://testpress:testpress@cluster0.ayi6n.mongodb.net/<dbname>?retryWrites=true&w=majority",
            //{user:Env.parsed.DB_USER,pass:Env.parsed.DB_PASS, useUnifiedTopology:true,useNewUrlParser: true}
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
            }
        );
        console.log(new Date().toString() + " Database connected");
    } catch (error) {
        console.log(new Date().toString() + " Unable to Connect ");
        console.log(error);
    }
};