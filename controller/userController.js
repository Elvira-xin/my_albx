//这个控制器完成所有与用户相关的业务操作
const userModel=require('../models/userModel.js');

exports.login=(req,res)=>{
    //接收参数
    let obj=req.body
    console.log(obj)
    //验证email
    userModel.login(obj.email,(err,data)=>{
        if(err){
            res.json({code:400,msg:'服务器异常'})
        }else{
            //判断是否查询到结果集
            if(data){
                //验证密码
                if(obj.password==data.password){
                    //登录成功，使用session写入登录状态
                    req.session.isLogin='true';
                    //将当前对象存储到session
                    req.session.currentUser=data;
                    res.send(JSON.stringify({code:200,msg:'登录成功'}));
                }else{
                    res.json({code:400,msg:'密码输入错误'})
                }
            }else{
                res.json({code:400,msg:'邮箱输入错误'})
            }
        }
    })
}