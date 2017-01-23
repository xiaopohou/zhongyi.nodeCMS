/**
 * Created by duzhong on 16/7/22.
 */
var siteConfig = require('../public/config/zy_Config');

var adminFunc = {

    setPageCurrentInfo: function (req, res) {
        return {
            //siteInfo: this.siteInfos(module),
            layout: '/managerv2/layout'
        }
    }
};

module.exports = adminFunc;