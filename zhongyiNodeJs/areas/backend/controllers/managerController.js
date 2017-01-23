
var baseController = require('../../../routes/base');

module.exports = {
    get_index: function (req, res) {
        res.render('manager/index2',baseController.setPageCurrentInfo(req,res));
    },
    get_login: function (req, res) {
        res.render('manager/login');
    },
    get_loginout: function (req, res) {
        res.render('manager/loginout');
    },
        get_test: function (req, res) {
        res.render('manager/test/index');
    }
};