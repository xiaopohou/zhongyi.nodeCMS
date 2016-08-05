/**
 * Created by duzhong on 16/8/2.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var InfoSchema=new Schema({
    _id:{
        type: String,
        unique: true,
        'default': shortid.generate
    },
    title: String,
    desc: String,
    state:String,
    content:String,
    pageImage:String,
    parentId:{type:String,'default':"0"},
    editorId:{type:String,'default':"0"},
    createDate: {type: Date, default: Date.now},
    updateDate:{type:Date,default:Date.now}
});
InfoSchema.statics={
    getOneItem: function (req, targetId, callBack) {
        InfoModel.findOne({'_id':targetId}).exec(function (err,result) {
            if(err){

                res.end(err);
            }
            callBack(result);
        })
    }
};
var InfoModel=mongoose.model('InfoModel',InfoSchema);
module.exports=InfoModel;