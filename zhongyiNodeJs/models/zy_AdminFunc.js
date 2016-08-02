/**
 * Created by duzhong on 16/7/22.
 */
var siteConfig = require('../public/config/zy_Config');
var SystemRoleGroupModel= require('../models/zy_SystemRoleGroup');
var SystemUser=require('../models/zy_SystemUser');
var adminFunc = {

    siteInfos: function (description) {
        return {
            title: siteConfig.zy_sitename,
            desc: description,
            author: siteConfig.zy_authorName,
            version:siteConfig.zy_appVerson
        }
    },
    setPageInfo: function (req, res, module) {

        return {
            siteInfo: this.siteInfos(module),
            layout: 'manager/public/zy_AdminLayout'
        }
    },
    RedirectURL:function (req,res) {
        res.redirect('/manager/testPage');
    },
    getTargetObjectByUrl:function (url) {
        var targetModel;
        if(url==siteConfig.zy_userSystemRoleGroupList[0]) {
            targetModel=SystemRoleGroupModel;
        }
        else if(url==siteConfig.zy_userSystemUserList[0]) {
            targetModel=SystemUser;
        }
        return targetModel;
    },
    renderPageWithCondition:function (req,res,targetUrl) {
        res.render(targetUrl);
    }
};

module.exports = adminFunc;