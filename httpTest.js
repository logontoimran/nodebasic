const http=require('http');
const server = http.createServer(function(req,res){
if(req.url=='/'){
  res.write("Thgis is the home page..");
  res.end();
}
if(req.url=='/about'){
  res.write("This is the about page..");
  res.end();
}

});


server.listen(5678);
console.log("Server started on port:5678");
