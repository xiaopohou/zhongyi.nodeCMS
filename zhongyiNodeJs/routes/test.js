var express = require('express');
 
var encryptHelper = require('../utils/encrypt');
var app = express.Router();
 


 
/* GET users listing. */
// app.get('/', function (req, res, next) {
//     res.send(encryptHelper.encrypt("laozhao"));
// });
// app.get('/lg', function (req, res) {
//     res.render('test/login', { layout: false });
// });
// app.post('/lg1', function (req, res) {
//     res.redirect('/backend/test/index');
     
// });
 


app.get('/b',function(req,res,next){
    console.log('1 ...');
    next();
},function(req,res,next){
  console.log('2 ...');
    next();
},function(req,res){
  res.end('2');
});
 


 app.get('/c',function(req,res){
    res.end('c');
   
});
module.exports = app;
