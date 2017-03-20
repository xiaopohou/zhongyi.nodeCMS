var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var AskSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    content:String,
    userid:String,
    CreateDate:{type:Date,default:Date.now}
});
var Ask=mongoose.model("Role",AskSchema);
module.exports=Ask;