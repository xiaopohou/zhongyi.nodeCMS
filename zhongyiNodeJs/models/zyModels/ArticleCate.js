var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var ArticleCateSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    parentid:String,
    
    CreateDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now}
 
});
var ArticleCate=mongoose.model("ArticleCate",ArticleCateSchema);

module.exports=ArticleCate;