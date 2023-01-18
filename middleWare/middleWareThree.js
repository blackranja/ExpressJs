const express = require('express');
const app = express();
let { people } = require('./data/data');

//Static Assests 
app.use(express.static('./methods-public'));

// Parse form data
app.use(express.urlencoded({ extended: false }))

// Parse Json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' })
    }
    res.status(201).send({ success: true, person: name })
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Enter Your Credetials');
})

app.listen(5000, () => {
    console.log(
        'Server is listening on port 5000...'
    )
}) 