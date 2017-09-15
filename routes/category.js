var express = require('express');

var router = express.Router();

var userdao = require("../models/category_dao");

router.post('/add', function(req, res, next) {
	var params=[req.body.name];
	
	userdao.addCategory(params, function(err,result){
		console.log(err,result);
		var o={};
		
		o.result=err==null;
		o.msg=o.result?"增加菜品成功!":"增加菜品失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/update', function(req, res, next) {
	var params=[req.body.name,req.body.id];
	
	userdao.updateCategory(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"修改菜品成功!":"修改菜品失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/delete/:id', function(req, res, next) {
	var params=req.params.id;
	userdao.deleteCategory(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"删除菜品成功!":"删除菜品失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});

router.get("/list",function(req,res){
	userdao.getCategory(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询菜品成功!":"查询菜品失败!";
		o.data=result;
		res.json(o);
	});

});

module.exports = router;