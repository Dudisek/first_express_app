'use strict';

var express = require('express');
var app = express();
var posts = require('./mock/posts.json');

app.get('/', function(req, res){
  res.send('<h1>I love you yeea</h1>');
});

app.get('/blog/:title', function(req, res){
  var title = req.params.title;
  var post = posts[title];
  res.send(post);
});

app.listen(3000, function() {
  console.log("server is running on 3000.");
});