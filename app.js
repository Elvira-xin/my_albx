const express=require('express');
const app=express();
const router=require('./router');
const session=require('express-session')
const bodyParser = require('body-parser');
app.listen(8686,()=>{
    console.log('http://127.0.0.1:8686')
});

//在express使用中间件，默认情况下，express并不会开启session的使用
app.use(session({
    secret:'bx',//相当于一个加密密钥，值可以是任意字符串
    resave:false,//强制session保存到session store中
    saveUninitialiazed:false //强制没有‘初始化’的session保存到storage中
}))



//处理静态页面
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

//配置ejs模板引擎
app.set('view engine','ejs');
//进行ejs模板文件查询的默认目录配置，下面这句代码写完之后，以后所有的ejs资源都会云指定的__dirname+"/views"
app.set('views',__dirname+'/views');

//配置body-parser
// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
// 处理psot方式的请求
// extended: false：将参数字符串转换为对象
app.use(bodyParser.urlencoded({ extended: false}));
// 后期可能会传递json格式字符串
app.use(bodyParser.json());

//让app使用router进行路由管理
app.use(router)