const http=require("http");

const server=http.createServer((req,res)=>{
if(req.url==="/"){
    res.end("http module learning");
}
else if(req.url==="/about"){
    res.end("Here are our products");
    }
    else{
res.end(`<h1>OOPS!</h1>
<p>The page you are searching is not available.Try entering valid url.</p>`)
    }
})
server.listen(3000);
