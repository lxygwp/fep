var http=require("http");
var querystring=require("querystring");
var util=require("util");
var server=http.createServer(function(req,res){
	var arr="";//定义一个变量,用于暂存请求体的信息
	res.writeHead(200, {
		"content-type": "text/html;charset=utf-8",
		"Access-Control-Allow-Origin": "*"
	});
	//通过req的data事件监听函数，每当接受到请求体的数据，就累加到arr变量中
	req.on("data",function(data){
		//console.log("1:",data.toString());
		arr+=data;
	});
	
	// 在end事件触发后，通过querystring.parse将arr解析为真正的POST请求格式，然后向客户端返回。
	req.addListener("end",function(){
		console.log("arr:",arr);
		var obj=querystring.parse(arr);
		console.log("obj:",obj);
		var obj2=util.inspect(obj);
		console.log("obj2:",obj2);
		res.write(JSON.stringify(obj));
		res.end();
	})
})

server.listen(81,function(){
	console.log("开启服务!");
})
