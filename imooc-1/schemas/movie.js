var mongoose = require('mongoose');
var moment = require('moment');

//数据库语言
var MovieSchema = new mongoose.Schema({
	title: String,
	doctor: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

//添加或修改时间判断
MovieSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt =Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	next();
});

//查询数据库
MovieSchema.statics = {
	fetch: function(cb){
		return this
			.find({})
			.sort('meta.createAt')
			.exec(cb)
	},
	//单查询
	findById: function(id,cb){
		return this
			.findOne({_id: id})
			.sort('meta.updateAt')
			.exec(cb)
	},
}

//输出模型
module.exports = MovieSchema;
