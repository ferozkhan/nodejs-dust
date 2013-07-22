
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    cart = require('./routes/cart'),
    http = require('http'),
    path = require('path'),
    consolidate = require('consolidate'),
    app_name = 'NodeExpressShop';

var dummy_data = [
            {"index":0, "id":"1", "name": "Nike", "size": [8, 9, 10], "price": "250"},
            {"index":1, "id":"2", "name": "Puma", "size": [8, 9, 10], "price": "350"},
            {"index":2, "id":"3", "name": "Adidas", "size": [8, 9, 10], "price": "450"}
        ];

var app = express();
app.engine('dust', consolidate.dust);

// all environments
// set
app.set('port', process.env.PORT || 3000);
app.set('app_name', app_name);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');
app.set('total_amount', '0.00');
app.set('basket', 0);

// use
app.use(express.logger('dev'));
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// app demo data
app.set('currency', process.env.PORT || 'USD');
app.set('items', dummy_data);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/item/add/:index', cart.addItem);
app.get('/checkout', cart.checkout);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
