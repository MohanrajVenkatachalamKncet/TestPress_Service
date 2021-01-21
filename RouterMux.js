const express=require('express');
const UserScoreRouter=require('./Router/UserScoreRouter.js')


const Router=express.Router();


Router.use(UserScoreRouter);
Router.get("/ping", (req, res) => {
    res.send("pong from server");
});
module.exports=Router;