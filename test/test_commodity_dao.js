var userdao=require("../models/commodity_dao.js");
var params=['凉拌猪耳朵',6,null];
var param={
	id:2
}
userdao.getCommodity(param,function(err,result){
	console.log(err,result);
});
