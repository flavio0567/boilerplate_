// ===== restaurant.JS ======
// ===== date:       ======
// define Schema
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema; 
var   shortid    = require('shortid');

const ProductSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: {
        type: String,
        required: [true, "Product must contain a Name"],
        minlength: 3,
        trim: true
    },
    qty: {
        type: Number,
        required: [true, "Product must contain a Qty"],
        min: 0,
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Product must contain a price"],
        min: 0,
        trim: true
    }, 
    }, { timestamps: true }, 
       { autoIndex: false },
       { usePushEach: true }
);


// set model by passing his Schema
mongoose.model('Product', ProductSchema);


ProductSchema.plugin(uniqueValidator);

// stored model in variable
const Product = mongoose.model('Product');