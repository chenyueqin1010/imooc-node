var mongoose = require('mongoose');
//加载模型
var MovieSchema = require('../schemas/movie');
var Movie = mongoose.model("Movie",MovieSchema);

module.exports = Movie;
