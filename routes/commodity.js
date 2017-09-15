var express = require('express');

var router = express.Router();

var userdao = require("../models/commodity_dao");

router.post('/add', function(req, res, next) {
	var params=[req.body.name,req.body.category_id,req.body.picture];
	
	userdao.addCommodity(params, function(err,result){
		console.log(err,result);
		var o={};
		
		o.result=err==null;
		o.msg=o.result?"增加商品成功!":"增加商品失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/update', function(req, res, next) {
	var params=[req.body.name,req.body.category_id,req.body.picture,req.body.id];
	
	userdao.updateCommodity(params, function(err,result){
		console.log(err,result);
		var o={};
		
		o.result=err==null;
		o.msg=o.result?"修改商品成功!":"修改商品失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.get("/list/:id",function(req,res){
//	var id=req.param("id");
	var params={
		id:req.params.id
	}
	console.log(params);
	userdao.getCommodity(params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询商品成功!":"查询商品失败!";
		o.data=result;
		res.json(o);
	});
});

module.exports=router;