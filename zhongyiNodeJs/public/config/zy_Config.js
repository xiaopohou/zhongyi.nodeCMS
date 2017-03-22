/**
 * Created by duzhong on 16/7/27.
 */
module.exports = {
    zy_mongo_address: "mongodb://127.0.0.1:27017/zhongNodeCMS",
    zy_mongo_root: "",
    zy_mongo_pass: "",
    zy_mongo_port: "27017",
    zy_sitename: "laozhao",
    zy_authorName: "老赵",
    zy_appVerson: "V.0.1.0",
    zy_userSystemRoleGroupList: ['userSystemRoleGroupManager', '系统角色组管理'],
    zy_userSystemUserList: ['userSystemUserManager', '系统用户管理'],

    zy_ManagerInfoList: ['ManagerInfoList', '资讯管理'],

    zy_system_illegal_param: '无效参数',
    zy_system_noPower: '无权限',
    imgZip: true, // 上传图片是否压缩(如果为false则本地不需要安装gm)


    //缓存设置
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_pwd: '',
    redis_db: 0
};