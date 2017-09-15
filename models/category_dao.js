var db = require("./db");

module.exports = {
	addCategory: function(params, callback) {
		db.query("insert into category(name) values(?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getCategory: function(params,callback) {
		db.query("select * from category where 1=1 "+parameter.handleId(params),function(err, result) {
			callback(err, result);
		});
	},
	updateCategory: function(params,callback) {
		db.query("update category set name=? where id=?",params, function(err, result) {
			callback(err, result);
		});
	},
	deleteCategory:function(params,callback){
		db.query("delete from category where 1=1 and id=?",params,function(err,result){
			callback(err,result);
		});
	}
}