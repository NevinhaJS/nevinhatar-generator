const hashToParts = require('./hashToParts')
const generator = require('./generator')
var express = require('express')
const http = require('http');
const cors = require('cors')

var app = express()
app.use(cors('*'))

const port = process.env.PORT || 5000;

const server = http.createServer(app);

app.get('/', async function (req, res) {
    const text = req.query.text
    const parts = hashToParts(text)
    
    await generator.loadDependencies()
    
    const image = await generator.generateImage(parts, 400)

    res.json({
        status: 'success',
        image
    })
})


server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});