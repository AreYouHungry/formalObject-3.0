var express = require('express');

var router = express.Router();
var crypto=require('crypto');
var userdao = require("../models/user_dao");

router.post('/add', function(req, res, next) {//用户注册
//	var psw=crypto.createHash("md5").update("req.body.password",'utf8').digest('hex');//md5加密
	var params=[req.body.name,req.body.password,req.body.phone,req.body.avatar,req.body.integral];
	
	userdao.addUser(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"增加用户成功!":"增加用户失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/update', function(req, res, next) {
	var params=[req.body.name,req.body.password,req.body.phone,req.body.avatar,req.body.integral,req.body.id];
	
	userdao.updateUser(params, function(err,result){
		console.log(err,result);
		var o={};
		
		o.result=err==null;
		o.msg=o.result?"修改用户成功!":"修改用户失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/delete', function(req, res, next) {
	var params=[req.body.id];
	
	userdao.deleteUser(params, function(err,result){
		console.log(err,result);
		var o={};
		
		o.result=err==null;
		o.msg=o.result?"删除用户成功!":"删除用户失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});

router.get("/list/:id",function(req,res){
	var params={
		id:req.params.id
	}
	userdao.getUsers(params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询用户成功!":"查询用户失败!";
		o.data=result;
		res.json(o);
	});

});
router.post("/login",function(req,res){
//	var psw=crypto.createHash("md5").update("req.body.password",'utf8').digest('hex');//md5加密
	var params=[req.body.name,req.body.password];
	userdao.loginUser(params,function(err,result){
		var o={};
		o.result=err==null;
		if(result==""){
			o.result=false;
			o.msg="没有该用户";
		}
		else{
			if(result[0].password==req.body.password){
				o.result=true;
				o.msg="登录成功";
			}
			else{
				o.result=false;
				o.msg="密码错误";
			}
		}
		console.log(o.msg);
		o.data=result;
		console.log(o.data);
		res.json(o);
	});

});

module.exports = router;