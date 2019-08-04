const express=require('express');
const router=express.Router();
const pageController=require('./controller/pageController');

//前台主页
router.get('/',(req,res)=>{
    res.render('./views/index.ejs')
})