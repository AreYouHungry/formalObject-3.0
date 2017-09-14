var express = require('express');

var router = express.Router();

var userdao = require("../models/cart_detail_dao");

router.post('/add', function(req, res, next) {
	var params=[req.body.cart_id,req.body.c_id,req.body.amount];
	userdao.addCart_detail(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"增加购物车内容成功!":"增加购物车内容失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/update', function(req, res, next) {
	var params=[req.body.amount,req.body.id];
	userdao.updateCart_detail(params, function(err,result){
		console.log(err,result);
	    var o={};
		o.result=err==null;
		o.msg=o.result?"更新购物车内容成功!":"更新购物车内容失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/delete', function(req,res,next) {
	var params=[];
	userdao.deleteCart_detail(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"清空购物车内容成功!":"清空购物车内容失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
module.exports = router;