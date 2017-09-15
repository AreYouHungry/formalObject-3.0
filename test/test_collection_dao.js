var userdao=require("../models/collection_dao.js");
var params={

};
userdao.getCollection(params,function(err,result){
	console.log(err,result);
});
