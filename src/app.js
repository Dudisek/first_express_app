'use strict';

var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var posts = require('./mock/posts.json');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.send("This page is under construction..");
  } else {
    var post = posts[title];
    res.send(post);
  };
});

app.listen(3000, function() {
  console.log("server is running on 3000.");
});