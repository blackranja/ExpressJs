const express = require('express');
const app = express();
//const authorize = require('./authorize');
//const logger = require('./logger');
const morgan = require('morgan');

//app.use([logger, authorize]);
//app.use('/api',logger);

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    //console.log(req.user);
    //console.log(req.id);
    res.send('Home');
})
app.get('/about', (req, res) => {
    res.send('About');
})
app.get('/contact', (req, res) => {
    res.send('contact');
})
app.get('/people', (req, res) => {
    res.send('people');
})
app.get('/api/products', (req, res) => {
    res.send('products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is Listening on port 5000....');
})