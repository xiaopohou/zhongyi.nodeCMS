
var basePage = require('../../../core/baseController');

module.exports = {
    get_index: function (req, res) {
        res.render('manager/index2', basePage.setLayoutPage(req,res,'x'));
    },
    get_login: function (req, res) {
        res.render('manager/login',basePage.setLayoutPage(req,res,'x'));
    },
     get_default: function (req, res) {
        res.render('manager/default',basePage.setLayoutPage(req,res,'x'));
    }

};