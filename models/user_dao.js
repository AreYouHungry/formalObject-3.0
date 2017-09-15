var db = require("./db");
var parameter=require("./parameter");
module.exports = {
	addUser: function(params, callback) {
		db.query("insert into user(name,password,phone,avatar,integral) values(?,?,?,?,?)", params, function(err, result) {
			callback(err, result);
		});
	},
	getUsers: function(params,callback) {//根据Id查用户
		db.query("select * from user where 1=1 "+parameter.handleId(params),function(err, result) {
			callback(err, result);
		});
	},
	getUsersByPage: function(page,pagesize,callback) {//根据页码查用户
		db.query("select * from user where 1=1 limit "+(page-1)*pagesize+","+pagesize,function(err, result) {
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