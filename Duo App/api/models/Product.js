const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productId: String,
    title: String,
    brand: String,
    image: String,
    description: String,
    weight: String,
    isFood: Boolean,
    barcode: Number,
    ingredients: String,
    score: Number,
    price: Number,
    properties: {
        check: Boolean,
        energy:{
            amount: Number,
            per: String
        },
        carbs:{
            amount: Number,
            per: String
        },
        sodium:{
            amount: Number,
            per: String
        },
        fat:{
            amount: Number,
            per: String
        },
        satfat:{
            amount: Number,
            per: String
        },
        salt:{
            amount: Number,
            per: String
        },
        sugar:{
            amount: Number,
            per: String
        },
        contains: [],
        organic: Boolean,
        fairtrade: Boolean,
        eco: Boolean,
        vegetarian: Boolean,
        vegan: Boolean,
        healthnotes: String
    },
    category: String,
    subcategory: String
});

module.exports = mongoose.model('Product', productSchema);