var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var AdminSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    phone:String,
    password:String,
    email:String,
    CreateDate:{type:Date,default:Date.now}
});
var Admin=mongoose.model("Admin",AdminSchema);

module.exports=Admin;