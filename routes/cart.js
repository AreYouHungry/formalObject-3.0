var express = require('express');

var router = express.Router();

var userdao = require("../models/cart_dao");

router.post('/add', function(req, res, next) {
	var params=[req.body.user_id];
	userdao.addCart(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"增加购物车成功!":"增加购物车失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.get("/list/:id",function(req,res){
    var id=req.params.id;
	userdao.getCart(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询购物车成功!":"查询购物车失败!";
		o.data=result;
		res.json(o);
	});
});
router.get("/list/:id",function(req,res){
    var id=req.params.id;
	userdao.finishCart(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询购物车成功!":"查询购物车失败!";
		o.data=result;
		res.json(o);
	});
});

module.exports = router;