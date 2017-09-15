var db = require("./db");
var parameter=require('./parameter');
module.exports = {
	addCollection: function(params,callback) {
		db.query("insert into collection(c_id,user_id,state) values(?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCollection: function(params,callback) {
		db.query("select * from collection where 1=1 "+parameter.handleCustom(params,"user_id")+parameter.handleCustom(params,"state"), function(err, result) {
			callback(err, result);
		});
	},
	updateCollection: function(params,callback) {
		db.query("update collection set state=? where id=?",params,function(err,result) {
			callback(err, result);
		});
	}
}