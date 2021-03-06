'use strict';

var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var posts = require('./mock/posts.json');
var postsList = Object.keys(posts).map(function(value) {
  return posts[value];
});

app.get('/', function(req, res){
  var path = req.path;
  res.locals.path = path;
  res.render('index');
});

app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if (title === undefined) {
    res.render('blog', {posts: postsList});
  } else {
    var post = posts[title] || {};
    res.render('post', { post: post });
  };
});

app.get('/posts', function(req,res) {
  if (req.query.raw) {
    res.json(posts);
  } else {
  res.json(postsList);
  };
});

app.listen(3000, function() {
  console.log("server is running on 3000.");
});