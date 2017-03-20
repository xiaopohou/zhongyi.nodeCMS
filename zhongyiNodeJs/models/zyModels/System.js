var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var SystemSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    sitename:String,
    siteauthor:String,
    siteemail:String,
    CreateDate:{type:Date,default:Date.now}
});
var System=mongoose.model("Role",SystemSchema);
module.exports=System;