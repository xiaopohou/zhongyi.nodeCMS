var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var AdItemsSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    coverimage:String,
    width:{type:Number,default:0},
    height:{type:Number,default:0},
    url:String,
    createDate:{type:Date,default:Date.now}

 
});
var AdItems=mongoose.model("AdItems",AdItemsSchema);

module.exports=AdItems;