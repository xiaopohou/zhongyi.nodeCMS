var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var admins = require('./routes/admin');//后台
var cms = require('./routes/cms');
var cmsV2 = require('./routes/cmsV2');
var system= require('./routes/system');
var adminV2= require('./routes/admin2');
var adminV3= require('./routes/admin3');
var authority = require('./routes/authority');
var role = require('./routes/role');
//模板引擎
var expressLayouts= require('express-ejs-layouts');
var partials= require('express-partials');
//载入路由解析组件
var resolve = require(path.join(__dirname,'utils','route'));

//引入session
var session = require('express-session');
var redisStorage = require('connect-redis')(session);
var setting=require('./public/config/zy_Config');
var app = express();

app.use(expressLayouts);
//默认设置区域
var defaultArea="frontend";
var router=express.Router();
// 路由中间件,实现多视图切换
router.use(function (req, res, next) {
    var url = req.url;
    var pathArr = url.split(/\/|\?/);
    var viewPath = path.join(__dirname, 'areas', defaultArea, 'views');
    if (pathArr[1] != "" && pathArr[1] != "favicon.ico") {
        viewPath = path.join(__dirname, 'areas', pathArr[1], 'views');
    }
    else {
        viewPath = path.join(__dirname, 'areas', defaultArea, 'views');
    }
    app.set('views', viewPath);
    next();
});
app.use(router);

// 设置控制器文件夹并绑定到路由
resolve
    .setRouteDirectory({
        areaDirectory: __dirname + '/areas',
        controllerDirname: 'controllers',
        defaultArea: defaultArea,
        defautController: 'home',
        defautAction: 'index'
    })
    .bind(router);
    
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//引入session并设置存储介质
app.use(session({
   secret:'laozhao',
    store:new redisStorage({
      port:setting.redis_port,
      host:setting.redis_host,
      pass:setting.redis_pwd,
      ttl:1800
    }),
    resave:true,
    saveUninitialized:true
}));


//ueditor注册
var ueditor = require('ueditor-nodejs');
app.use('/ueditor/ue', ueditor({//这里的/ueditor/ue是因为文件件重命名为了ueditor,如果没改名，那么应该是/ueditor版本号/ue
    configFile: '/ueditor/jsp/config.json',//如果下载的是jsp的，就填写/ueditor/jsp/config.json
    mode: 'local', //本地存储填写local
    accessKey: '',//本地存储不填写，bcs填写
    secrectKey: '',//本地存储不填写，bcs填写
    staticPath: path.join(__dirname, 'public'), //一般固定的写法，静态资源的目录，如果是bcs，可以不填
    dynamicPath: '/upload/blogpicture' //动态目录，以/开头，bcs填写buckect名字，开头没有/.路径可以根据req动态变化，可以是一个函数，function(req) { return '/xx'} req.query.action是请求的行为，uploadimage表示上传图片，具体查看config.json.
}));

// var engines = require('consolidate');
//
// app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', routes);
app.use('/users', users);
//app.use('/admin',admins);
app.use('/system',system);
app.use('/api',cms);
app.use('/adminV2',adminV2);
app.use('/admin',adminV3);
app.use('/adminV2/authority',authority);
app.use('/adminV2/role',role);
app.use('/adminV2/cmsv2',cmsV2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// 错误或者服务器500异常处理
app.use(function (err, req, res, next) {
    var error = (req.app.get('env') === 'development') ? err : {};
    //写错误日志
    var errorMes = '[' + Date() + ']' + req.url + '\n' + '[' + error.stack + ']' + '\n';
  
    var status = err.status || 500;
    res.status(status);
    res.send('<pre>' + status + ' ' + err.message + '\n' + errorMes + '</pre>');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
