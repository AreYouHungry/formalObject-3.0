
/*
 params参数是个对象格式{
 	name：joker，
 	age:16
 }
 * */
module.exports={
	handleName:function(params){//通过name查找
		var sql="";
		for(var k in params){
			if(!params[k]==""&& k=="name"){
				sql="AND "+k+" like '"+params[k]+"'";
			}
		}
		return sql;
	},
	handleId:function(params){//通过id查找
		var sql="";
		for(var k in params){
			if(!params[k]==""&& k=="id"){
				sql="AND "+k+" = '"+params[k]+"'";
			}
		}
		return sql;
	},
	handleCustom:function(params,custom){//自定义查找--custom为表格需要查找相应属性
		var sql="";
		for(var k in params){
			if(!params[k]==""&& k==custom){
				sql="AND "+k+" = '"+params[k]+"'";
			}
		}
		return sql;
	},
	handleTime:function(params,custom){//时间判断,时间参数如“>2017-9-12”
		var sql="";
		for(var k in params){
			if(!params[k]==""&& k==custom){
				sql="AND "+k+"'"+params[k]+"'";
			}
		}
		return sql;
	}
}
