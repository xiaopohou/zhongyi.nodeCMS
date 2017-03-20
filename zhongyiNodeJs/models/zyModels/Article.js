var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    classid:String,
    classid2:String,
    content:String,
    intro:String,
    editorid:String,    
    coverpage:String,
    url:String,
    clickcount:{type:Number,default:0},
    CreateDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now}
 
});
var Article=mongoose.model("Article",ArticleSchema);

module.exports=Article;