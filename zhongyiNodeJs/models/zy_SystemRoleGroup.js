/**
 * Created by duzhong on 16/7/26.
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var SystemRoleGroupSchema = new Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name: String,
    state: String,
    description: String,
    createDate: {type: Date, default: Date.now},
    updateDate:{type:Date,default:Date.now}
});

SystemRoleGroupSchema.statics = {
    getOneItem: function (req, targetId, callBack) {
        SystemRoleGroupModel.findOne({'_id':targetId}).exec(function (err,result) {
            if(err){
                res.end(err);
            }
            callBack(result);
        })
    }
};

var SystemRoleGroupModel = mongoose.model('SystemRoleGroupModel', SystemRoleGroupSchema);

module.exports = SystemRoleGroupModel;