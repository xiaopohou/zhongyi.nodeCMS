var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    password:String,
    CreateDate:{type:Date,default:Date.now}
});
var User=mongoose.model("User",UserSchema);
module.exports=User;