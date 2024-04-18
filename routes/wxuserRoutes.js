const express = require('express');
const router = express.Router();
const wxuserController = require('../controllers/wxuserController');
const { checkAdminPermission, checkGroupPermission } = require('../common/jwt');



// 与微信登录后台交互，生成token，并存储登录用户的信息
router.post('/wxLogin', wxuserController.wxLogin);

// 获取当前登录用户信息
router.get('/getUserInfo', wxuserController.getUserInfo);

// 当前登录用户修改个人信息
router.post('/updateUserInfo', wxuserController.updateUserInfo);

// admin查询用户列表
router.get('/getWxUserList', checkAdminPermission, wxuserController.getWxUserList);

// user查询绑定的用户列表
router.get('/getBindWxUserList', wxuserController.getBindWxUserList);

// admin修改用户信息
router.post('/updateUserInfoByAdmin', checkAdminPermission, wxuserController.updateUserInfoByAdmin);






module.exports = router;