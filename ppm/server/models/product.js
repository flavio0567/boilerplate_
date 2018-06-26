// ===== restaurant.JS ======
// ===== date:       ======
// define Schema
const mongoose   = require('mongoose');
const Schema     = mongoose.Schema; 

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        minlength: 4,
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: 3,
        trim: true
    },
    imagePath: {
        type: String,
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