var gmodels =require('../../../utils/gmodels');
var basePage = require('../../../core/baseController');
module.exports={
    // 生成models模型
    get_index: function (req, res) {
        gmodels(function (tables, foreignKeys) {
            res.render("manager/generate/generatemodels", {
                tables: tables,
                foreignKeys: foreignKeys,
                layout:false
            });
        });
    }
};