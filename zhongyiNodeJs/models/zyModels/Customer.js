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
    email:String,
    phone:String,
    Sex:String,
    Loaction:String,
    Address:String,
    Age:String,
    CreateDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now}
 
});
var User=mongoose.model("Admin",UserSchema);

module.exports=User;