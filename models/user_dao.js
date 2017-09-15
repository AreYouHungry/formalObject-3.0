var db = require("./db");

module.exports = {
	addUser: function(params, callback) {
		db.query("insert into user(name,password,phone,avatar,integral) values(?,?,?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getUsers: function(params,callback) {
		db.query("select * from user",params,function(err, result) {
			callback(err, result);
		});
	},
	updateUser: function(params,callback) {
		db.query("update user set name=?,password=?,phone=?,avatar=?,integral=? where id=?",params, function(err, result) {
			callback(err, result);
		});
	},
	deleteUser:function(params,callback){
		db.query("delete from user where id=?",params,function(err,result){
			callback(err,result);
		});
	},
	loginUser:function(params,callback){
	db.query("select * from user where name=? and password=?",params,function(err,result){
			callback(err,result);
		});
	}
}