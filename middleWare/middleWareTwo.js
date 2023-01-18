const express = require('express');
const app = express();
let { people } = require('./data');

//Static Assests 
app.use(express.static('./methods-public'));

// Parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('POST');
})

app.listen(5000, () => {
    console.log(
        'Server is listening on port 5000...'
    )
}) 