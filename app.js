
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    consolidate = require('consolidate'),
    app_name = 'NodeExpressShop',
    redis = require('redis');

var dummy_data = [
            {"id":"1", "name": "Nike", "size": [8, 9, 10], "price": "250"},
            {"id":"2", "name": "Puma", "size": [8, 9, 10], "price": "350"},
            {"id":"3", "name": "Adidas", "size": [8, 9, 10], "price": "450"}
        ];

var app = express();
app.engine('dust', consolidate.dust);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('app_name', app_name);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');
app.use(express.logger('dev'));
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// app demo data
app.set('currency', 'USD');
app.set('items', dummy_data);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
