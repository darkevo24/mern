const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const foodModel = require("./models/foods");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://darkevo24:Alvinyoyo9598@cluster0.wswom.mongodb.net/food?retryWrites=true&w=majority",{
    useNewUrlParser : true,

})

app.post("/",function(req,res){

    const foodName = req.body.foodName;
    const days = req.body.days;

    const food = new foodModel({
        foodName : foodName,
        daysSinceAte : days
    });
    a = 10;
    
    food.save();
    res.send("inserted data");
})

app.get("/read",function(req,res){
    foodModel.find({},function(err,result){
        if (err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3001,function(){
    console.log("server running at 3001...");
})