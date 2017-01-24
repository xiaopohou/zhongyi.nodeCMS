
var baseController = require('../../../routes/base');

module.exports = {
    get_index: function (req, res) {
        //res.render('manager/index2',baseController.setPageCurrentInfo(req,res));
        res.render(
            'manager/index2',
            {
                title: "hello",
                "layout": "manager/_layoutView"
            }
        );
    },
    get_login: function (req, res) {
        res.render('manager/login');
    },
     get_default: function (req, res) {
        res.render('manager/default',{"layout":"manager/_layoutView"});
    }

};