/**
 * Created by duzhong on 16/8/2.
 */
var express= require('express');
var router = express.Router();
var url =require('url');

var InfoModel= require('../models/zy_Info');
var KindModel= require('../models/zy_Kind');

//资讯列表
router.get('/managerinfo',function (req,res) {
    console.log('列表首页');
});
//分类列表
router.get('/managerkind',function (req,res) {
    console.log('列表首页');
});
//添加分类
router.get('/managerkind/kind/add',function (req,res) {
    console.log('managerkind/kind/add');
});
//修改分类
router.get('/managerkind/kind/:id',function (req,res) {
    console.log('managerkind/kind/add');
});
//修改资讯
router.get('/managerkind/info/:id',function (req,res) {
    console.log('列表首页');
});
//提交表单添加
router.post('/manager/:defaultUrl/add',function (req,res) {
    
});
//提交表单修改
router.post('/manager/:defaultUrl/modify',function (req,res) {

});

module.exports=router;