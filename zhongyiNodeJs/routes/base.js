/**
 * Created by duzhong on 16/7/22.
 */
var siteConfig = require('../public/config/zy_Config');

var adminFunc = {

    siteInfos: function (description) {
        return {
            title: siteConfig.zy_sitename,
            desc: description,
            author: siteConfig.zy_authorName,
            version: siteConfig.zy_appVerson
        }
    },
    setPageCurrentInfo: function (req, res, module) {
        return {
            siteInfo: this.siteInfos(module),
            layout: 'managerv2/layout/layout'
        }
    },
    RedirectURL: function (req, res) {
        res.redirect('/manager/testPage');
    },

    renderPageWithCondition: function (req, res, targetUrl) {
        res.render(targetUrl);
    }
};

module.exports = adminFunc;