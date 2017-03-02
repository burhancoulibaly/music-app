var logger = require('morgan'),
cors = require('cors'),
http = require('http'),
express = require('express'),
errorhandler = require('errorhandler'),
dotenv = require('dotenv'),
bodyParser = require('body-parser'),
request = require('request');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
  res.writeHead(200,{

  });
});
request.method === 'OPTIONS'

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler());
};

var port = process.env.PORT || 3002;

app.get("/getTopArtist", (req,res)=>{
  request.get({
    url:"https://api.discogs.com//database/search?artist=Drake&{page=2&per_page=75}",
    headers:{
    'Content-Type':'application/json',
    'User-Agent':'MyDiscogsMusicApp/1.0 +http://localhost:4200/music-main',
    'Accept':'application/vnd.discogs.v2.discogs+json',
    'Authorization':'Discogs '+
                    'key=eIkhkrmqZlZHMCHKUyzX, '+
                    'secret=AUmQijxfEFwaLPVOEdGtTCjcHJUMDCam',
    }
  },(err,reponse,body)=>{
    if(err){
      res.send(err);
    }else{
      res.send(JSON.parse(body));
    }
  })
})

http.createServer(app).listen(port, function(err){
	console.log('listening in http://localhost: ' + port)
})

