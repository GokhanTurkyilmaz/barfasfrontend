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
    const tabblelist =  apis.tabblelist
    const mydevicelist =  apis.mydevicelist
    if(tabblelist != null && mydevicelist != null){
      res.render('mainpage',{data1:tabblelist,data2:mydevicelist})
    }else{
      res.json("data is looding ..")
    }
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
  "DeviceName": req.body.DeviceName,
  "SN": req.body.SN,
  "Model": req.body.Model,
  "Type": req.body.Type,
  "Department": req.body.Department,
  "DeviceIP": req.body.DeviceIP,
  "DeviceAdmin": req.body.DeviceAdmin,
  "DeviceSuperUser": req.body.DeviceSuperUser,
  "Remark": req.body.Remark,
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
 ///app.listen(port, () => {
  /// console.log(`Example app listening at http://localhost:${port}`)
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);

 })