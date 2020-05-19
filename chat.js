var express = require('express');
var http = require('http');
var cors = require('cors');

var app = express();

app.use(cors());

app.get('/woomurf', function (req, res) {
    var data = {
        "answer": "Welcome to Woomurf's Chatbot"
    }

    res.json(data);
});

app.get('/woomurf/:question', function (req, res) {
    
    var q = req.params.question;

    var data = {}
     if(q.includes("name")){
        data = {
            "answer": "우현웅"
        }
    }
    else if (q.includes("age")){
        data = {
            "answer": 25
        }
    }
    else if (q.includes("location") || q.includes("live")){
        data = {
            "answer": "Guri"
        }
    }
    else if (q.includes("email")){
        data = {
            "answer": "dngusdnd@gmail.com"
        }
    }
    else{
        data = {
            "answer": "sorry, answer is not exist"
        }
    }

    res.json(data);
});

http.createServer(app).listen(8080, function () {
    console.log("server on!");
    
})