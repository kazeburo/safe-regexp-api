import express, { json, urlencoded } from "express";
import safe from 'safe-regex';
var app = express();

app.use(json())
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.post("/is_safe_regexp", function(req, res, next){
    const regexp = req.body.regexp
    if (regexp === undefined) {
        res.statusCode = 400
        res.json({error: true, message: "No regexp posted"})
        return
    }
    const is_safe = safe(regexp)
    res.json({error: false, is_safe: is_safe})
});

app.post("/is_safe_regex", function(req, res, next){
    const regex = req.body.regex
    if (regex === undefined) {
        res.statusCode = 400
        res.json({error: true, message: "No regex posted"})
        return
    }
    const is_safe = safe(regex)
    res.json({error: false, is_safe: is_safe})
});

app.get("/live", function(req, res, next){
    res.json({status: "OK"})
});

app.get("/", function(req, res, next){
    res.statusCode = 403
    res.json({})
});
