const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set("view engine","ejs");

app.use(express.static('./public'))

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Route to show the form for adding a product
app.get('/add-product', (req, res) => {
    res.render('addProd');
});


// Route to handle form submission
app.post('/product', async (req, res) => {
    const productName = await req.body.name;
    const productSize = await req.body.size;
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
    res.redirect('/'); 
});

app.listen(3000);