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
 const port = 5000
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
  apis.show_mydevice("61879efcfb37724ae80c6db8")
  setTimeout(function(){
    apis.show_tabble("61879efcfb37724ae80c6db8")
    const tabblelist =  apis.tabblelist
    const mydevicelist =  apis.mydevicelist
    if(tabblelist != null && mydevicelist != null){
      res.render('mainpage',{data1:tabblelist,data2:mydevicelist})
    }else{
      res.json("data is looding ..")
    }
  },1000)

  

})

app.get('/addperson', urlencodedParser, function (req, res) {
  apis.show_department("61879efcfb37724ae80c6db8")
  setTimeout(function(){
    const answer =  apis.departmenlist
    if(answer != null){
      res.render('addperson',{data:answer})
    }

  },100)

  

})
app.get('/adddevice', urlencodedParser, function (req, res) {

  res.render('adddevice')

})
app.get('/smartrules', urlencodedParser, function (req, res) {

  res.render('smartrules')

})
app.get('/addtable-first', urlencodedParser, function (req, res) {


  res.render('addtable-first')

})

app.get('/addwidgets', urlencodedParser, function (req, res) {

  res.render('addwidgets')

})
app.get('/adddepartment', urlencodedParser, function (req, res) {

  res.render('adddepartment')

})
app.get('/login', urlencodedParser, function (req, res) {

  res.render('login')

})
app.get('/Register', urlencodedParser, function (req, res) {

  res.render('Register')

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
  "UserId": "61879efcfb37724ae80c6db8",
  "role": "admin"
});

var config = {
  method: 'post',
 ////url: 'https://barfas-server.herokuapp.com/insert/device',
  url: 'http://localhost:3000/insert/device',
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
 /**
  * add personnel 
  */
  app.post('/add/personnel', urlencodedParser, function (req, res) {
    var data = JSON.stringify({
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2MwZDdjMTE4MWViNDg4MzI4MWU5MCIsImlhdCI6MTYzNTUyOTkxNH0.WoBgn29V4aiNONxuXMsoFln8K4svvQVndg-Pwhdqa0Q",
      "Name": req.body.Name,
      "FullName": req.body.FullName,
      "Email": req.body.Email,
      "PhoneNumber": req.body.PhoneNumber,
      "Password": req.body.Password,
      "Sex": req.body.Sex,
      "Role": {
        "Admin": "false",
        "Customer": "false",
        "EndUser": "true"
      },
      "Departman": req.body.Departman,
      "UserId": "61879efcfb37724ae80c6db8",
      "PersonnelId": req.body.PersonnelId,
      "StaffCode": req.body.StaffCode,
      "situation": {
        "Whether": req.body.Whether,
        "SeniorMode": req.body.SeniorMode
      },
      "CardNo": req.body.CardNo,
      "PunchPwd": req.body.PunchPwd,
      "EntryStatus": req.body.EntryStatus,
      "IDNO": req.body.IDNO,
      "Positsion": req.body.Positsion,
      "StaffType": req.body.StaffType,
      "Degree": req.body.Degree,
      "Address": req.body.Address,
      "tell": req.body.tell,
      "Photo": req.body.Photo
    });
    
    var config = {
      method: 'post',
     /// url: 'https://barfas-server.herokuapp.com/insert/personnel',
     url: 'http://localhost:3000/insert/personnel',
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
            res.send(" a personnel has been added but you not have UI for show that, you can see from postman or database")
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
 // const PORT = process.env.PORT || 3000;
///app.listen(PORT, () => {
   /// console.log(`Our app is running on port ${ PORT }`);

 })