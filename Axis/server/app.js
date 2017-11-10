var express = require('express');
var app = express();
var router = express.Router();
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('authen', 'user');
app.use('/statics', express.static('statics'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// define the about route
router.get('/class', function(req, res) {
	var page = parseInt(req.query.page);
	var pageNum = parseInt(req.query.pageNum);
	var templateJson = JSON.parse(fs.readFileSync('json/class.json', 'utf8'));
	var items = templateJson.items.slice( (page - 1) * pageNum, page * pageNum);
	var data = {};
	data.status = templateJson.status;
	data.items = items;
	if(page * pageNum >= templateJson.items.length){
		data.hasData = false;
	}else{
		data.hasData = true;
	}
	res.json(data);
});

router.get('/avail', function(req, res) {
	var page = parseInt(req.query.page);
	var pageNum = parseInt(req.query.pageNum);
	var templateJson = JSON.parse(fs.readFileSync('json/avail.json', 'utf8'));
	var items = templateJson.items.slice( (page - 1) * pageNum, page * pageNum);
	var data = {};
	data.status = templateJson.status;
	data.items = items;
	if(page * pageNum >= templateJson.items.length){
		data.hasData = false;
	}else{
		data.hasData = true;
	}
	res.json(data);
});

router.get('/notice', function(req, res) {
	var page = parseInt(req.query.page);
	var pageNum = parseInt(req.query.pageNum);
	var templateJson = JSON.parse(fs.readFileSync('json/notice.json', 'utf8'));
	var items = templateJson.items.slice( (page - 1) * pageNum, page * pageNum);
	var data = {};
	data.status = templateJson.status;
	data.items = items;
	if(page * pageNum >= templateJson.items.length){
		data.hasData = false;
	}else{
		data.hasData = true;
	}
	res.json(data);
});

app.use('/api', router);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});