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
        console.log('product:', req.body);
        let product = new Product(req.body.product);
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
        // .populate('reviews')
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
                eProduct.title = req.body.title;
                eProduct.price = req.body.price;
                eProduct.imagePath = req.body.imagePath;      
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
        Product.findByIdAndRemove({_id: req.params.id})
            .then(product => res.json(product))
            .catch(error => console.log(error));
    }

}