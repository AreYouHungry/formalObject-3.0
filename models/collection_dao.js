var db = require("./db");

module.exports = {
	addConnection: function(params, callback) {
		db.query("insert into collection(c_id,user_id,state) values(?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getConnection: function(params,callback) {
		db.query("select * from collection", function(err, result) {
			callback(err, result);
		});
	},
	updateConnection: function(params,callback) {
		db.query("update collection set state=? where id=?",params, function(err, result) {
			callback(err, result);
		});
	},
	deleteConnection:function(params,callback){
		db.query("delete from collection where 1=1+c_id=? and user_id=?",params,function(err,result){
			callback(err,result);
		});
	}
}