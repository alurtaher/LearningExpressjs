const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const prodRouter = require('./routes/product')

const app = express();
app.set("view engine","ejs");

app.use(express.static('./public'))

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter)
app.use(shopRouter)
app.use(prodRouter)



// 404 Handler
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});

app.listen(3000);