var userdao=require("../models/category_dao.js");

var params=[];
userdao.deleteCategory(params,function(err,result){
	console.log(err,result);
});
