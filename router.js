const express=require('express');
var router=express.Router();
const pageController=require('./controller/pageController.js');
const userController=require('./controller/userController.js');

//前台部分
//主页
router.get('/',pageController.getIndexPage)
//详情页
.get('/detail',pageController.getDetailPage)
//列表页
.get('/list',pageController.getListPage)

//后台页面部分
//分类目录
.get('/admin/categories',pageController.getAdminCategoriesPage)
//评论部分
.get('/admin/comments',pageController.getAdminCommentsPage)
// //后台主页
.get('/admin',pageController.getAdminIndexPage)
//登录页
.get('/admin/login',pageController.getAdminLogionPage)
//导航菜单页
.get('/admin/nav-menus',pageController.getAdminNavMenusPage)
// //重置密码页
.get('/admin/password-reset',pageController.getAdminPasswordResetPage)
//写文章
.get('/admin/post-add',pageController.getAdminPostAddPage)
//所有文章
.get('/admin/posts',pageController.getAdminPostsPage)
// //我的个人资料
.get('/admin/profile',pageController.getAdminProfilePage)
// //网站设置
.get('/admin/settings',pageController.getAdminSettingsPage)
//轮播图
.get('/admin/slides',pageController.getAdminSlidesPage)
//用户
.get('/admin/users',pageController.getAdminUsersPage)


//登陆页面页面处理路由
.post('/login',userController.login)

module.exports=router;