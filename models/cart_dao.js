var db = require("./db");

module.exports = {
	addCart: function(params, callback) {
		db.query("insert into cart(user_id) values(?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCart: function(params,callback) {
		db.query("select * from cart",params, function(err, result) {
			callback(err, result);
		});
	},
	updateCart: function(params, callback) {
		db.query("update category set user_id=? where id=?", params, function(err, result) {
			callback(err, result);
		});
	},
	deleteCart:function(params,callback){
		db.query("delete from cart where id=?",params,function(err,result){
			callback(err,result);
		});
	}
}