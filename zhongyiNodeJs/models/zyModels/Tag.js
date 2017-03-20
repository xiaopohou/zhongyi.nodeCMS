var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var TagSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    CreateDate:{type:Date,default:Date.now}
});
var Tag=mongoose.model("Role",TagSchema);
module.exports=Tag;