var db = require("./db");

module.exports = {
	addUser: function(params, callback) {
		db.query("insert into u_order(state,s_time,e_time,total,address,evaluate,user_id,b_id) values(?,?,?,?,?,?,?,?)", params, function(err, result) {
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
	}
}