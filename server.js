const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation and Querying');
})

app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send('Hello' + ' ' + req.params.name);
})

app.get('/api/movies', (req, res)=>{
const mymovies =[
    {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    },
    {
    "Title": "Captain America: Civil War",
    "Year": "2016",
    "imdbID": "tt3498820",
    "Type": "movie",
    }
    ];

    res.json({movies:mymovies});
});



app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

app.post('/name', (req, res)=>{
    res.send('Hello ' + req.body.fname + ' ' +  req.body.lname);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})