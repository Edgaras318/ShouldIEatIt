const express = require('express');
// route sub package that express gives
const router = express.Router();
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const Product = require('../models/Product');

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if(docs){
            res.status(200).json(docs);
        }else{

        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
            productId: req.body.productId,
            title: req.body.title,
            brand: req.body.brand,
            image: req.body.image,
            description: req.body.description,
            weight: req.body.weight,
            isFood: req.body.isFood,
            barcode: req.body.barcode,
            ingredients: req.body.ingredients,
            score: req.body.score,
            price: req.body.price,
            properties: {
                check: req.body.properties.check,
                energy:{
                    amount: req.body.properties.energy.amount,
                    per:  req.body.properties.energy.per
                },
                carbs:{
                    amount: req.body.properties.carbs.amount,
                    per:  req.body.properties.carbs.per
                },
                sodium:{
                    amount: req.body.properties.sodium.amount,
                    per:  req.body.properties.sodium.per
                },
                fat:{
                    amount: req.body.properties.fat.amount,
                    per:  req.body.properties.fat.per
                },
                satfat:{
                    amount: req.body.properties.satfat.amount,
                    per:  req.body.properties.satfat.per
                },
                salt:{
                    amount: req.body.properties.salt.amount,
                    per:  req.body.properties.salt.per
                },
                sugar:{
                    amount: req.body.properties.sugar.amount,
                    per:  req.body.properties.sugar.per
                },
                contains: req.body.properties.contains,
                organic: req.body.properties.organic,
                fairtrade: req.body.properties.fairtrade,
                eco: req.body.properties.eco,
                vegetarian: req.body.properties.vegetarian,
                vegan: req.body.properties.vegan,
                healthnotes: req.body.properties.healthnotes
            },
            category: req.body.category,
            subcategory: req.body.subcategory
    });

    product.save().then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

// router.get('/:barcode', (req, res, next) => {
//     const barcode = req.params.barcode;
//     Product.find({barcode: barcode})
//     .exec()
//     .then(doc => {
//         console.log("From database", doc);
//         if(doc.length ==0){
//             res.status(404).json({message: "No such bar"});
//         }else{
//             res.status(200).json(doc);
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({error: err});
//     });
// });

router.get('/:barcode', (req, res, next) => {
    const barcode = req.params.barcode;
    fetch(`http://supermarketownbrandguide.co.uk/api/newfeed.php?json=barcode&q=${barcode}&apikey=fetszgvfr72ry30x0wh4`)
  .then(response => response.json())
  .then(doc => {
        console.log("From database", doc);
        if(doc.length ==0){
            res.status(404).json({message: "No such bar"});
        }else{
            res.status(200).json(doc);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});


// function findData(barcode){
//     var barcode = thisbarcode;
//     return fetch(`http://supermarketownbrandguide.co.uk/api/newfeed.php?json=barcode&q=${thisbarcode}&apikey=fetszgvfr72ry30x0wh4`)
// }
// router.get('/:barcode', (req, res, next) => {
//     const barcode = req.params.barcode;
//     console.log('Hi: ' + findData(barcode));
//  });

// router.delete('/:barcode', (req, res, next) => {
//     const barcode = req.params.barcode;
//     Product.remove({barcode: barcode})
//     .exec()
//     .then(result =>{
//         res.status(200).json(result);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({error: err});
//     });
// });

// router.patch("/:barcode", (req, res, next) => {
//     const barcode = req.params.barcode;
//     const updateOps = {};
//     for(const ops of req.body){
//         updateOps[ops.propName] = ops.value;
//     }
//     Product.update({barcode: barcode}, { $set: updateOps})
//     .exec()
//     .then(result =>{
//         console.log(result);
//         res.status(200).json(result);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         });
//     });
// });

module.exports = router;