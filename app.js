/**
 * @description buxom app company :
 * Server 
 */
 const express = require('express')
 const app = express()
 var bodyParser = require('body-parser')
 var axios = require('axios')
 var pach = require('path')
 var apis = require('./api_module')
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
  apis.show_mydevice("617bf0aa95e511c1a188d51c")
  setTimeout(function(){
    apis.show_tabble("617bf0aa95e511c1a188d51c")
    const tabblelist = apis.tabblelist
    const mydevicelist = apis.mydevicelist
    res.render('mainpage',{data1:tabblelist,data2:mydevicelist})

  },3500)

  

})

app.get('/addperson', urlencodedParser, function (req, res) {

  res.render('addperson')

})
app.get('/adddevice', urlencodedParser, function (req, res) {

  res.render('adddevice')

})
app.get('/smartrules', urlencodedParser, function (req, res) {

  res.render('smartrules')

})

/**
 * Actions
 */
 /**
  * add devise
  */
  app.post('/add/device', urlencodedParser, function (req, res) {
var data = JSON.stringify({
  "DeviceName": "blackdoor",
  "SN": "146646s",
  "Model": "barfas3",
  "Type": "optopark systems",
  "Department": "barfas",
  "DeviceIP": "192.161.1.1",
  "DeviceAdmin": "admin",
  "DeviceSuperUser": "admin",
  "Remark": "text",
  "UserId": "617bf0aa95e511c1a188d51c",
  "role": "admin"
});

var config = {
  method: 'post',
  url: 'https://barfas-server.herokuapp.com/insert/device',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  const additem = JSON.stringify(response.data)
  const dataadd = JSON.parse(additem) 
      if (dataadd.Status === true){
        res.redirect('/mainpage')
      }else {
        res.send("err!")
      }
})
.catch(function (error) {
  console.log(error);
});


  })
 app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
 })