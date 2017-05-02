var express = require('express');
var path = require('path');//路径解析
var bodyParser = require('body-parser');//解析表单数据
var mongoose = require('mongoose');
var Movie = require('./models/movie');
var _ = require('underscore');
var app  = express();
app.locals.moment = require('moment'); // 载入moment模块，格式化日期
//连接数据库
var db = mongoose.connect('mongodb://localhost:27017/imooc');


app.set('views','./views/pages');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(80);

console.log('imooc started on 80');

//路由配置
//首页
app.get('/',function(req,res){
		Movie.fetch(function(err,movies){
			if(err){
				console.log(err);
			}
		res.render('index',{
			title: 'imooc 首页',//注意冒号后带空格
			movies: movies
		});
	});
});
//详情页
app.get('/movie/:id',function(req,res){
	var id = req.params.id;
	
	Movie.findById(id,function(err,movie){
		res.render('detail',{
			title: 'imooc '+movie.title,
			movie: movie
		});
	});
});
//电影列表
app.get('/admin/list',function(req,res) {
	Movie.fetch(function (err, movies) {
		if (err) {
			console.log(err);
		}
		res.render('list', {
			title: 'imooc 列表页',
			movies: movies
		});
	});
});
//后台录入
app.get('/admin/movie', function (req, res) {
	res.render('admin', {
		title: 'imooc 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	});
});

//接受前台传来的数据*保存&修改电影*
app.post('/admin/movie/new', function (req, res) {
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie = null;

	if (id !== 'undefined') {
		Movie.findById(id, function (err, movie) {
			if (err) {
				console.log(err);
			}
			_movie = _.extend(movie, movieObj);//替换
			_movie.save(function (err, movie) {
				if (err) {
					console.log(err);
				}
				res.redirect('/movie/' + movie._id);
			})
		})
	} else {
		_movie = new Movie({
			title: movieObj.title,
			doctor: movieObj.doctor,
			country: movieObj.country,
			year: movieObj.year,
			language: movieObj.language,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		});
		_movie.save(function (err, movie) {
			if (err) {
				console.log(err);
			}
			res.redirect('/movie/' + movie._id);
		})
	}
});

//点击修改页面数据
app.get('/admin/update/:id', function (req, res) {
	var id = req.params.id;

	if (id) {
		Movie.findById(id, function (err, movie) {
			res.render('admin', {
				title: 'imooc 后台更新页',
				movie: movie
			});
		})
	}
});

//列表页删除功能
app.delete('/admin/list', function(req,res){
	var id = req.query.id;
	
	if(id){
		Movie.remove({_id: id},function(err,movie){
			if(err){
				console.log(err);
			}else{
				res.json({success: 1});
			}
		})
	}
})
