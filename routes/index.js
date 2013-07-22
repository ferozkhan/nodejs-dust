
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', {
                        "app_name": req.app.settings.app_name,
                        "items": req.app.settings.items,
                        "currency":  req.app.settings.currency,
                        "total_amount": req.app.settings.total_amount,
                        "basket": req.app.settings.basket,
                        "msg": req.app.settings.msg
                });
};

exports.flush = function(req, res){
    req.app.settings.msg =  '';
}