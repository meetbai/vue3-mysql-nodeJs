let mysql = require('mysql');
let connection = mysql.createPool({
	host: 'localhost',
	user: 'testguest',
	port: '3306',
	database: 'testDb',
	password: 'Test@123456'
})
let sql=function (sql,callBack) {
	connection.query(sql,(err,data)=>{
		callBack(err,data)
	})
}

//数据连接配置
module.exports = {sql}
