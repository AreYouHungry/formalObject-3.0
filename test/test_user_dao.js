var userdao=require("../models/user_dao.js");

var params=['李四',123];
userdao.loginUser(params,function(err,result){
	console.log(err,result);
});
