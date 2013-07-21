
/*
 * GET home page.
 */

exports.index = function(req, res){
  app_name = req.app.settings.app_name;
  items = req.app.settings.items;
  currency = req.app.settings.currency;
  res.render('index', { "app_name": app_name, "items" : items, "currency":  currency});
};