const express = require('express');
const path = require('path');
const app = express();

//SETUP STATIC AND MIDDLEWARE(static assets)
app.use(express.static('./public'))

//app.get('/', (req, res) => {
//1.Send index.html
//res.sendFile(path.resolve(__dirname, './navBar/index.html'))
//2.Just dump index.html in the static assests(./public folder)

//})
//3.SSR--Server-Side-Rendering

app.all('*', (req, res) => {
    res.status(404)
        .send('Resource not Found')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})