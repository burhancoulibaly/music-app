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
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
});
request.method === 'OPTIONS'

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler());
};

var port = process.env.PORT || 3002;

app.get("/getTopArtist", (req,res)=>{
  request.get({
    url:"https://api.discogs.com/oauth/request_token",
    headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': 'OAuth oauth_consumer_key="eIkhkrmqZlZHMCHKUyzX",'+
                     'oauth_nonce=3/01/2017,'+
                     'oauth_signature="AUmQijxfEFwaLPVOEdGtTCjcHJUMDCam&",'+
                     'oauth_signature_method="PLAINTEXT",'+
                     'oauth_timestamp="current_timestamp",'+
                     'oauth_callback="http://localhost:4200/music-main"',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
    }
  },(err,reponse,body)=>{
    if(err){
      res.send(err);
    }else{
      res.send(body);
    }
  })
})

http.createServer(app).listen(port, function(err){
	console.log('listening in http://localhost: ' + port)
})

