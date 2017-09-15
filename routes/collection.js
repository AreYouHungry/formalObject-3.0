var express = require('express');

var router = express.Router();

var userdao = require("../models/collection_dao");

router.post('/add', function(req, res) {
	var state=1;
	var params=[req.body.c_id,req.body.user_id,state];
	console.log(params[0]);
	userdao.addCollection(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"增加收藏成功!":"增加收藏失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.post('/update', function(req, res) {
	var state=0;
	var params=[state,req.body.id];
	userdao.updateCollection(params, function(err,result){
		console.log(err,result);
		var o={};
		o.result=err==null;
		o.msg=o.result?"取消收藏成功!":"取消收藏失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});
router.get("/list/:user_id/:state",function(req,res){
	var params={
		user_id:req.params.user_id,
		state:req.params.state
	}
	userdao.getCollection(params,function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询收藏记录成功!":"查询收藏记录失败!";
		o.data=result;
		res.json(o);
	});

});

module.exports = router;