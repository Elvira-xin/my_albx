const express=require('express');
const app=express();
const router=require('./router')
app.listen(8686,()=>{
    console.log('http://127.0.0.1:8686')
});

//处理静态页面
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));


app.use(router)