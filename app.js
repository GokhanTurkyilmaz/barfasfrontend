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
 var deviceService = require('./adddevice')
 var personService = require('./addperson')
 app.set("view engine", "ejs")
 
 app.set('services', 'public/services');
 var cookieParser = require('cookie-parser')
const { json } = require('body-parser')
 const port = 5000
 app.use(cookieParser())
 app.use(express.static('public'))
 app.use('/css',express.static(__dirname + 'public/css'))
 app.use('/images',express.static(__dirname + 'public/images'))
 app.use('/js',express.static(__dirname + 'public/js'))
 app.use('/vendors',express.static(__dirname + 'public/vendors'))
 
 var urlencodedParser = bodyParser.urlencoded({ extended: false })
 app.get('/', urlencodedParser, function (req, res) {
  if (req.cookies.Abarxqza2 != null){
   res.render('index')
  }
})
var serverUrl = "https://barfas.iran.liara.run"

 app.get('/admin', urlencodedParser, function (req, res) {
   if (req.cookies.Abarxqza2 != null){
    res.render('index')
   }
 })

 app.get('/mainpage', urlencodedParser, function (req, res) {
  apis.show_mydevice(req.cookies.Abarxqza2)
  setTimeout(function(){
    apis.show_tabble(req.cookies.Abarxqza2)
    const tabblelist =  apis.tabblelist
    const mydevicelist =  apis.mydevicelist
    if(tabblelist != null && mydevicelist != null){
      res.render('mainpage',{data1:tabblelist,data2:mydevicelist})
    }else{
      res.redirect('/mainpage')
    }
  },1000)

  

})

app.get('/addperson', urlencodedParser, function (req, res) {
  apis.show_department(req.cookies.Abarxqza2)
  setTimeout(function(){
    const answer =  apis.departmenlist
    if(answer != null){
      res.render('addperson',{data:answer})
    }else{
      res.redirect('/addperson')
    }

  },120)

})
app.post('/add/device', urlencodedParser, function (req, res) {
  deviceService.deviceadd(req.body.DeviceName,req.body.Sn,req.body.Model,req.body.Type, req.body.Department, req.body.DeviceIP,
    req.body.DeviceAdmin,req.body.DeviceSuperUser,req.body.Remark,   req.body.UserId, req.body.role
    );
    setTimeout(function(){
      if(deviceService.deviceAddItems!=null){
        res.redirect('/adddevice')
      }
      else{
        res.redirect('/mainpage')
      }
  
    },1000)

})
app.post('/add/personnel',urlencodedParser,function(req,res){
  var myToken=req.cookies.Abarxqza2;
  var myToken2=req.cookies.Abarxqza2;
  personService.personadd(myToken,req.body.Name,req.body.FullName,req.body.Email,req.body.PhoneNumber,req.body.Password,req.body.Sex,
    req.body.Departman,myToken2,req.body.PersonnelId,req.body.StaffCode,req.body.Whether,req.body.SeniorMode,req.body.CardNo,req.body.PunchPwd,
    req.body.EntryStatus,req.body.IDNO,req.body.Positsion,req.body.StaffType,req.body.Degree,req.body.Address,req.body.tell,req.body.Photo);

  setTimeout(function(){
    if(apisPerson.personAddItems!=null){
      res.redirect('/addperson')
    }else{
      res.redirect('/mainpage')
    }
  },1000)
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
app.get('/profile', urlencodedParser, function (req, res) {
  apis.Profile(req.cookies.Abarxqza2)
  setTimeout(function(){
    if(apis.profileitems != null && req.cookies.Abarxqza2 != null){
      res.render('profile',{myprofile:apis.profileitems})
    }
    else{
      res.redirect('/profile')
    }

  },120)

  

})

app.post('/login/loginPost', urlencodedParser, function (req, res) {
    apis.Login_main(req.body.userName,req.body.password)
    setTimeout(function(){
      if (apis.loginitems != null && apis.loginitems.Status === true){
        res.cookie('Abarxqza2',apis.loginitems.Yourtoken)
        res.redirect('/admin')
      }else{
        res.send("you are not user")
      }
    },250)

  
})

 app.get('/login', urlencodedParser, function (req, res) {
  debugger;
   res.render('login')

 })

app.get('/Register', urlencodedParser, function (req, res) {

  res.render('Register')

})
app.get('/adddevice', urlencodedParser, function (req, res) {
  res.render('adddevice')
})


/**
 * logout
 */
 app.get('/logout', urlencodedParser, function (req, res) {
  res.clearCookie('Abarxqza2')
  res.redirect('/login')
})

 app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
 // const PORT = process.env.PORT || 3000;
///app.listen(PORT, () => {
   /// console.log(`Our app is running on port ${ PORT }`);

 })