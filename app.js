/**
 * @description buxom app company :
 * Server 
 */
 const express = require('express')
 const app = express()
 var bodyParser = require('body-parser')
 var axios = require('axios')
 var pach = require('path')
 app.set("view engine", "ejs")
 var cookieParser = require('cookie-parser')
 const port = 9000
 app.use(cookieParser())
 app.use(express.static('public'))
 app.use('/css',express.static(__dirname + 'public/css'))
 app.use('/images',express.static(__dirname + 'public/images'))
 app.use('/js',express.static(__dirname + 'public/js'))
 app.use('/vendors',express.static(__dirname + 'public/vendors'))

 
 var urlencodedParser = bodyParser.urlencoded({ extended: false })


 app.get('/admin', urlencodedParser, function (req, res) {

     res.render('index')
   
 })
 app.get('/mainpage', urlencodedParser, function (req, res) {

  res.render('mainpage')

})


 
 app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
 })