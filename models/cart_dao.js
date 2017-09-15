var db = require("./db");
var parameter=require('./parameter');
module.exports = {
	addCart: function(params, callback) {
		db.query("insert into cart(user_id) values(?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCart: function(params,callback) {
		db.query("select * from cart where 1=1 "+parameter.handleCustom(params,"user_id"),params,function(err, result) {
			callback(err, result);
		});
	},
	updateCart: function(params, callback) {
		db.query("update category set user_id=? where id=?", params, function(err, result) {
			callback(err, result);
		});
	}
}