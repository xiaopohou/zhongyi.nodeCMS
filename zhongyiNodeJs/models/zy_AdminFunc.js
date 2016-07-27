/**
 * Created by duzhong on 16/7/22.
 */
var siteConfig = require('../config/zy_Config');
var SystemRoleGroup= require('../models/zy_SystemRoleGroup');
var adminFunc = {

    siteInfos: function (description) {
        return {
            title: siteConfig.zy_sitename,
            desc: description,
            author: siteConfig.zy_authorName
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
        if(url==siteConfig.zy_userSystemRoleGroupList[0])
        {
            targetModel=SystemRoleGroup;
        }
        return targetModel;
    }
};

module.exports = adminFunc;