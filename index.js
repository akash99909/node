const express = require('express')
const app = express();
const fetch = require('node-fetch');
const port = 3000


app.get('/', (req, res) => {
    res.render('customer_details.ejs')
})
app.get('/orders', (req, res) => {
    res.render('order_details.ejs')
})


  
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})