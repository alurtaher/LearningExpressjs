const express = require('express');
const router = express.Router();

router.post('/product', async (req, res) => {
    const productName = await req.body.name;
    const productSize = await req.body.size;
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
    res.redirect('/'); 
});

module.exports = router;