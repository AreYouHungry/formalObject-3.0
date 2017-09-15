var userdao=require("../models/cart_detail_dao.js");

var params=[5,7,5];
userdao.addCart_detail(params,function(err,result){
	console.log(err,result);
});
