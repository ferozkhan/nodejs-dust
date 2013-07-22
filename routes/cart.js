
/*
 * Cart Actions.
 */

exports.addItem = function(req, res){
    item = req.app.settings.items[req.params.index];
    req.app.settings.basket = parseInt(req.app.settings.basket) + 1;
    req.app.settings.total_amount = parseFloat(req.app.settings.total_amount) + parseFloat(item.price);
    res.redirect('/')
};

exports.checkout = function(req, res){
    req.app.settings.basket = 0;
    req.app.settings.total_amount = '0.00';
    req.app.settings.msg = 'Thank you for shopping!'
    res.redirect('/')
}