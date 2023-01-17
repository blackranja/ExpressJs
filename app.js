const express = require('express');
const app = express();
const logger = require('./logger');
app.use(logger);
app.get('/', (req, res) => {
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


app.listen(5000, () => {
    console.log('Server is Listening on port 5000....');
})