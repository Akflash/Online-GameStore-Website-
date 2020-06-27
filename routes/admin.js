var router = require('express').Router();
var Category = require('../models/category');
var Product = require('../models/product');

router.get('/add-category', function (req, res, next) {
  res.render('admin/add-category', { message: req.flash('success') });
});
router.get('/add-game', function (req, res, next) {
  res.render('admin/add-game', { message: req.flash('success') });
});


router.post('/add-category', function (req, res, next) {
  var category = new Category();
  category.name = req.body.name;

  category.save(function (err) {
    if (err) return next(err);
    req.flash('success', 'Successfully added a category');
    return res.redirect('/add-category');
  });
})

router.post('/add-game', function (req, res, next) {
  var game = new Product();
  game.name = req.body.name;
  game.price = req.body.price;
  game.category = req.body.category;
  game.image = req.body.image;

  game.save(function (err) {
    if (err) return next(err);
    req.flash('success', 'Successfully added a game');
    return res.redirect('/add-game');
  });
})


router.post('/edit-game', (req, res, next) => {
  return Product.updateOne({
    _id: req.body.productId
  },
    {
      $set: {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image
      }
    }
  ).then(result => {
    res.redirect('/');
    
  });
});

router.post('/delete-game', (req, res, next) => {
  return Product.deleteOne({
    _id: req.body.productId
  }).then(result => {
    res.redirect('/');
    
  });
});
 




module.exports = router;
