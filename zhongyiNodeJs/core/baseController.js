var setting = require('../utils/system');
module.exports = {
    getCurrnetPageBaseInfo: function (tag) {
        return {
            title: setting.sitename,
            description: setting.sitedescription
        }
    },
    setLayoutPage: function (req, res, tag) {
        return {
            setting: this.getCurrnetPageBaseInfo(tag),
            layout: "manager/_layoutView"
        };
    }
};