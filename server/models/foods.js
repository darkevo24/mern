const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    foodName : {
        type : String,
        required : true
    },
    daysSinceAte : {
        type : Number,
        required : true
    }
});

const food = mongoose.model("food",foodSchema);
module.exports = food;