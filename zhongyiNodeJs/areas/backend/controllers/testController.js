var basePage = require('../../../core/baseController');
var mutipart = require('connect-multiparty');
var multipartMiddleware= mutipart();

var express = require('express');
var router = express.Router();

module.exports =
    {
        post_toupload:[multipartMiddleware,function(req,res){

            res.send('ok'+res.files);
        }],
        get_index: function (req, res) {
            res.render('test/login', basePage.setLayoutPage2(req, res, 'x'));
        },
        get_editor:function(req,res)
        {
           res.render('test/editor', {layout:false});
        },
         get_dire:function(req,res)
        {
           res.render('test/testDirective', {layout:false});
        },
        get_logined: function (req, res) {

            //res.send("----------->"+req.session.user.name);
            res.render('test/logined', {layout:false});
        },

        post_loginout: function (req, res) {
            if (req.session.user != null) {
                req.session.user = null;
                res.redirect('/backend/test/index');
            }

        },
        post_login: function (req, res) {
            var user = {
                name: "laozhao", pass: "0"
            };

            // if (req.cookies["islogin"]==null) {
            //     res.cookie("islogin",1);
            //     res.cookie("loginname", JSON.stringify(user), { maxAag: 60 * 1000 });
            //     res.send('未登录');
            // }
            // else {
            //     res.send('已登陆');
            // }
            if (req.session.user == null) {
                req.session.user = user;
                res.redirect('/backend/test/logined');
            }
            else {
                req.session.user = null;
                res.send('已登陆');
            }
            // res.render('manager/default/index', basePage.setLayoutPage2(req, res, 'x'));
        }

    }