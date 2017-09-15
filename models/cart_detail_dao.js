var db = require("./db");
var parameter=require('./parameter');
var async = require("async");
module.exports = {
	addCart_detail: function(params, callback) {
		db.query("insert into cart_detail(cart_id,c_id,amount) values(?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCart_detail: function(params,callback) {
		db.query("select cart_id,category.id from (cart_detail,category) where category.id=?",params,function(err, result) {
			callback(err, result);
		});
	},
	finishCart_detail: function(params, callback) {
		connection.beginTransaction(function() {
			async.series([
					function(cb) {
						connection.query("delete from cart_detail", function(err, result) {
							cb(err, result);
						});
					},
					function(cb) {
						connection.query("select * from v_news", function(err, result) {
							cb(err, result);
						});
					}
				],
				function(err, result) {
					if(err) {
						connection.rollback();
						console.log("Rollback...");
					} else {
						connection.commit();
						console.log("Commit...");
					}
					callback(err, result);
					connection.end();
				});

		});

	},
	deleteCart_detail:function(params,callback){
		db.query("delete from cart_detail",params,function(err,result){
			callback(err,result);
		});
	}
}