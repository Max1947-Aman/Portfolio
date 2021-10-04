const http=require('http');
const port=8001;
const fs=require('fs');

function requestServer(req,res){
    console.log('req.url');
    res.writeHead(200,{'content-type':'text/html'});

    let filepath;

    switch(filepath)
    {
        case '/':
            filepath='./index.html'
            break;
        default:
            filepath='404.html'

    }
    fs.readFile(filepath,function(err,data){
        if(err)
        {
            console.log('error',err);
            return res.end(<h1>Error!</h1>)
        }
    }
)}

const server=http.createServer(requestHandler);

  server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up and running on port:",port);

  });