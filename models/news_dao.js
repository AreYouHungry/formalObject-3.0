var connection = require("./db");

var async = require("async");

module.exports = {
	getNews: function(params, callback) {
		connection.beginTransaction(function() {
			async.series([
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

	}

}