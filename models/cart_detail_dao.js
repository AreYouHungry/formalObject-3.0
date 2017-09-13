var db = require("./db");

module.exports = {
	addCart_detail: function(params, callback) {
		db.query("insert into cart_detail(cart_id,c_id,amount) values(?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCart_detail: function(params,callback) {
		db.query("select * from cart_detail", function(err, result) {
			callback(err, result);
		});
	},
	updateCart_detail: function(params, callback) {
		db.query("update cart_detail set amount=? where id=?",params, function(err, result) {
			callback(err, result);
		});
	},
	delCart_detail:function(params,callback){
		db.query("delete from cate_detail",params,function(err,result){
			callback(err,result);
		});
	}
}