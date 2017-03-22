var basePage = require('../../../core/baseController');
module.exports =
    {
        get_index: function (req, res) {
            res.render('test/login', basePage.setLayoutPage2(req, res, 'x'));
        },
         get_logined: function (req, res) {
            res.render('test/logined', basePage.setLayoutPage2(req, res, 'x'));
        },
        get_loginout:function(req,res)
        {
            req.session.user=null;
            res.locals.user=null;
            res.redirect('/backend/test/login');
        },
        post_login: function (req, res) {
            var admin = {
                name: "laozhao", pass: "0"
            };
               
            if (req.body.uname==admin.name)
            {
                 req.session.user=admin;

                 res.locals.name=admin.name;
              
                 res.redirect('/backend/test/logined');
                res.end();
            }else
            {
                res.redirect('/backend/test/logined');
            }
            res.render('manager/default/index', basePage.setLayoutPage2(req, res, 'x'));
        }
    }