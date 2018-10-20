var http=require("http");
var querystring=require("querystring");
var server=http.createServer(function(req,res){
	var arr="";
	res.writeHead(200, {
		"content-type": "text/html;charset=utf-8",
		"Access-Control-Allow-Origin": "*"
	});
	//接收数据
	req.addListener("data",function(data){
		console.log("1:",data.toString());
		arr+=data;
	});
	
	//接收完毕以后执行
	req.addListener("end",function(){
		console.log("arr:",arr);
		var obj=querystring.parse(arr);
		console.log("obj:",obj);
		res.write(JSON.stringify(obj));
		res.end();
	})
})

server.listen(81,function(){
	console.log("开启服务!");
})
