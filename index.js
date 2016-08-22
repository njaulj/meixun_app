var express = require('express')

var app = express()


app.use('/',function(req,res){
	res.json('welcome')
})

app.listen(3000)