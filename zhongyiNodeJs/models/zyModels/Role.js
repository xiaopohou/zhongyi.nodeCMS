var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var RoleSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    Name:String,
    CreateDate:{type:Date,default:Date.now}
});
var Role=mongoose.model("Role",RoleSchema);
module.exports=Role;