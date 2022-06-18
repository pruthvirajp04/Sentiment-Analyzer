var express = require('express');
var app = express();
var url = require("url");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();


app.set('view engine', 'ejs');
app.use(express.static("templates"));

app.get('/', function(req, res) {
    var q = url.parse(req.url, true);
    var statement = q.query.inputt
    if (statement) {
        var result = sentiment.analyze(statement);
        res.render('index', { score: result.score })

    } else {
        res.render('index', { score: "Enter the input statement" });
    }
});

app.listen(8080);
console.log('http://localhost:8080/');