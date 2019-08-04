const express=require('express');
const router=express.Router();
const pageController=require('./controller/pageController');

//前台部分
//主页
router.get('/',pageController.getIndexPage)
//详情页
.get('/detail',pageController.getDetailPage)
//列表页
.get('/list',pageController.getListPage)


module.exports=router;