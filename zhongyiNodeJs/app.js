var express = require('express');
var path = require('path');
var fs = require('fs');
//var _= require('lodash');
var fileStreamRotator = require('file-stream-rotator');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
//template engine
var expressLayouts = require('express-ejs-layouts');
var partials = require('express-partials');
//载入路由解析组件
var resolve = require(path.join(__dirname, 'utils', 'route'));

//session
var session = require('express-session');
var redisStorage = require('connect-redis')(session);
var setting = require('./public/config/zy_Config');

var filter = require('./filter/filter');
var common = require('./routes/common');
var test = require('./routes/test');
var app = express();
//加载过滤器
//app.use(filter);

app.use(expressLayouts);
app.use('/common', common);
app.use('/t', test);



// app.use(lodash());
app.use(cookieParser());

//引入session并设置存储介质
app.use(session({
    secret: 'laozhao',
    store: new redisStorage({
        port: setting.redis_port,
        host: setting.redis_host,
        pass: setting.redis_pwd,
        ttl: 1800
    }),
    resave: false,
    saveUninitialized: true

}));

//处理非get提交数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//default area
var defaultArea = "backend";
var router = express.Router();
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

//ueditor register
var ueditor = require('ueditor-nodejs');
app.use('/ueditor/ue', ueditor({//这里的/ueditor/ue是因为文件件重命名为了ueditor,如果没改名，那么应该是/ueditor版本号/ue
    configFile: '/ueditor/jsp/config.json',//如果下载的是jsp的，就填写/ueditor/jsp/config.json
    mode: 'local', //本地存储填写local
    accessKey: '',//本地存储不填写，bcs填写
    secrectKey: '',//本地存储不填写，bcs填写
    staticPath: path.join(__dirname, 'public'), //一般固定的写法，静态资源的目录，如果是bcs，可以不填
    dynamicPath: '/upload/blogpicture' //动态目录，以/开头，bcs填写buckect名字，开头没有/.路径可以根据req动态变化，可以是一个函数，function(req) { return '/xx'} req.query.action是请求的行为，uploadimage表示上传图片，具体查看config.json.
}));


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
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(partials());
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));


//log
var logDir = __dirname + '/logs/accessLog';
fs.existsSync(logDir) || fs.mkdirSync(logDir);
var errorLogDir = __dirname + '/logs/errorLog'
fs.existsSync(errorLogDir) || fs.mkdirSync(errorLogDir);

//访问日志 
var accessStream = fileStreamRotator.getStream({
    filename: logDir + '/access-%DATE%.txt',
    frequency: 'daily',
    verbose: false,
    date_format: "YYYY-MM-DD"
});
app.use(logger('combined', { stream: accessStream }));
//错误日志
var errorLogStream = fs.createWriteStream(errorLogDir + '/error.txt');

app.engine('html', ejs.__express);
app.set('view engine', 'html');


// var engines = require('consolidate');
//
// app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');


//setting static location path
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'views')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    //console.log(" ------------------------i watch you visit website------------------------");
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    var error = (req.app.get('dev') === 'development') ? err : {};
    var errorMessage = '[' + Data() + ']' + req.url + '\n' + '[' + error.stack + ']\n';
    errorLogStream.write(errorMessage);
    var status = error.status || 500;
    res.status(status);
    res.send('<pre>' + error.message + '</pre>');
});

module.exports = app;
