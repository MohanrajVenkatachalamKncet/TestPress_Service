//Importing Packages
const express=require('express');
const UserScoreRouter=express.Router();
const UserScoreSchema = require('../Database/Schema/UserScoreSchema');

//Router Testing
UserScoreRouter.get("/ping",(req,res)=>{
    res.send("Hai");
})

//Storing User Name and Score
UserScoreRouter.post("/createUserScore",async(req,res)=>{
    console.log(req.body)
    try{
        const need = new UserScoreSchema({
            ...req.body
        })
        const data = await need.save();
        res.send(data);
    }
    catch(err){
        res.send(err)
    }
});

//Sending User Name and Score
UserScoreRouter.get("/getUserScore",async(req,res)=>{
    console.log(req.body)
    try{
        
        const data = await UserScoreSchema.find();
        res.send(data);
    }
    catch(err){
        res.send(err)
    }
});

//Exporting END Points
module.exports=UserScoreRouter;