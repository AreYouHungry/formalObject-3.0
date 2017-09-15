var userdao=require("../models/cart_dao.js");
var params=[];
userdao.getCart(params,function(err,result){
	console.log(err,result);
});
