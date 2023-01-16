const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200)
        .send('Home Page')

})
app.get('/about', (req, res) => {
    res.status(200)
        .send('About Page');
})
app.all('*', (req, res) => {
    res.status(404)
        .send('<h1>Resource Not Found</h1>');
})
app.listen(5000, () => {
    console.log("Server is Listening on port 5000.....");
})



//app.get
//app.post
//app.put
//app.delete
//app.all
//app.listen
//app.use