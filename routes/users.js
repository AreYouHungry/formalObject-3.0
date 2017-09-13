var express = require('express');

var router = express.Router();

var userdao = require("../models/user_dao");

router.post('/add', function(req, res, next) {
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

router.get("/list",function(err,res){
	userdao.getUsers(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询用户成功!":"查询用户失败!";
		o.data=result;
		res.json(o);
	});

});

module.exports = router;