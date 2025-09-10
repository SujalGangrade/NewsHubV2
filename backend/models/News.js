const mongoose = require("mongoose");

const NewsSchema =  new mongoose.Schema(
    {
        title: {type:String , required:true},
        summary:{type:String , required:true},
        content:{type:String, required:true},
        imageUrl:{type:String },
        date:{type:Date},
        userId:{type:mongoose.Schema.Types.ObjectId ,
            ref:"User",
            required:true
        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("News",NewsSchema);

