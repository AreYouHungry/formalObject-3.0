var db = require("./db");
var parameter=require("./parameter");
module.exports = {
	addCommodity: function(params, callback) {
		db.query("insert into commodity(name,category_id,picture) values(?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCommodity: function(params,callback) {
		db.query("select * from commodity where 1=1 "+parameter.handleId(params),function(err, result) {
			callback(err, result);
		});
	},
	updateCommodity: function(params, callback) {
		db.query("update commodity set name=? where id=?",params, function(err, result) {
			callback(err, result);
		});
	},
	deleteCommodity:function(params,callback){
		db.query("delete from commodity where id=?",params,function(err,result){
			callback(err,result);
		});
	}
}