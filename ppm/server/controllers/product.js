//* ===== product.JS ======*/
//* ===== date:      ======*/
//
const mongoose  = require('mongoose');
const Product   = mongoose.model('Product');

module.exports = { 

    index: (req, res) => {
        return res.redirect('/');
    },
    list: (req, res) => {
        Product.find({}).sort({ 'title': 1 })
            .then(product => res.json(product))
            .catch(error => console.log(error));
    },
    new: (req, res) => {
        var shortid = require('shortid');
        // console.log('shortid', shortid.generate());
        console.log('product in new:', req.body.product);
        let product = new Product({
              name: req.body.product.name,
              qty: req.body.product.qty,
              price: req.body.product.price,
             }
            );
        product.save(function(err, result){
            if(err) {
                console.log('Something went wrong when saving');
                res.json(err);
            } else { 
                console.log('successfully saving');
                res.json(result);
            }
        })
    },
    getProductById: function(req, res) {
        console.log('getProductById: ', req.params.id);
        Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(error => console.log(error));
    },
    update: (req, res) => {
        console.log('update: ', req.body);
        Product.findOne({
             _id: req.body._id 
            }, function (err, eProduct) {
            if (err) {
                console.log('Something went wrong in update when find product', err);
            } else { 
                eProduct.name = req.body.name;
                eProduct.qty = req.body.qty;
                eProduct.price = req.body.price;  
                eProduct.save(function(err, result){
                    if(err) {
                        console.log('Something went wrong when saving');
                        res.json(err);
                    } else { 
                        console.log('successfully saving');
                        res.json(result);
                    }
                })
            }
        })
    },
    destroy: (req, res) => {
        console.log('req.params.id', req.params.id)
        Product.findByIdAndRemove({_id: req.params.id})
            .then(product => res.json(product))
            .catch(error => console.log(error));
    }

}