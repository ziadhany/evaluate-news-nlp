const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const axios = require('axios');
var cors = require('cors')
var bodyParser = require('body-parser')

console.log(`Your API key is ${process.env.API_KEY}`);
const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use( bodyParser.json() );       // to support JSON-encoded bodies

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/test', function (req, res) {
    var url = req.body.url;
    const api = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`;
    axios.get(api).then(function (response) {
        res.send(response.data)
  });
})
