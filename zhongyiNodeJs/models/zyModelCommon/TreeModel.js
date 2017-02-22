var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var TreeModelSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    parentid:String,
    name:String,
    isLeft:String,
    expanded:String,
    entityJson:String,
    CreateDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now}
 
});
var TreeModel=mongoose.model("TreeModel",TreeModelSchema);

module.exports=TreeModel;