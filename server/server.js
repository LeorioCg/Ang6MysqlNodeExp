var express = require("express");
//var MongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');
//var url = "mongodb://127.0.0.1:27017";
var app = express();

const mysql   = require('mysql');
 

console.log('x1Bc'); 
//Config
app.use(bodyParser.json());
app.use(function (req, res, next) { ;
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Codingpedia, Authorization');
    next();
});


 
function execSQLQuery(sqlQry, res){
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    password: "ptl079",
    database: "LojasOiDB"
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

app.get('/usuarios', (req, res) =>{
	execSQLQuery('select * from usuario', res)
});

app.get('/usuario/:id', (req, res) =>{
	let filter='';
	if(req.params.id)
	filter = ' where id=' + parseInt(req.params.id);
	execSQLQuery('select * from usuario ' + filter, res);
});

app.get('/usuario/gravar/:nome/:login/:senha/:empresa', (req, res) =>{
    execSQLQuery(`insert into usuario(nome, login, senha, empresa) values 
    ('${nome} ',' ${login} ',' ${senha} ',' ${empresa}') `, res);
});

app.get('/usuario/excluir/:id', (req, res) =>{
	execSQLQuery('delete from usuario where id= ' + parseInt(req.params.id), res);
});

var server = app.listen(3001, "0.0.0.0", function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Servidor Iniciado")
})













