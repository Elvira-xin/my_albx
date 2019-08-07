//实现用户相关的数据处理
const conn=require('../utail/myconn.js');
// console.log(conn)

//验证登录数据
exports.login=(email,callback)=>{
    var sql=`SELECT * FROM users WHERE email="${email}"`
    conn.query(sql,(err,results)=>{
        if(err){
            callback(err)
        }else{
            callback(null,results[0]);
        }
    })
}