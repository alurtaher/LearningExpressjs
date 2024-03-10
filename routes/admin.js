const express = require('express');
const router = express.Router();

// Route to show the form for adding a product
router.get('/add-product', (req, res) => {
    res.render('addProd');
});



module.exports = router;