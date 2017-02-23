var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var ModuleSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    parentid:String,
    level:String,
    icon:String,
    isExpand:String,
    url:String,
    target:String,
    sort:String,
    CreateDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now}
 
});
var Module=mongoose.model("Module",ModuleSchema);

module.exports=Module;