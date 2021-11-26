/**
 * show tabbles api
 */
var axios = require('axios');

var serverUrl = "https://barfas.iran.liara.run"

function show_tabble(token){
var data = JSON.stringify({
  "Yourtoken": token
});

var config = {
  method: 'post',
  url: 'https://barfas.iran.liara.run/tabbleslist',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  const tabblelist =  response.data
  exports.tabblelist=tabblelist
})
.catch(function (error) {
  console.log(error);
});

}
/**
 * show decice with id api
 */
 function show_mydevice(token){
   
 var data = JSON.stringify({
   "Yourtoken": token
 });
 
 var config = {
   method: 'post',
   url: 'https://barfas.iran.liara.run/finddevicewithid',
   headers: { 
     'Content-Type': 'application/json'
   },
   data : data
 };
 
 axios(config)
 .then(function (response) {
   const mydevicelist =  response.data
   exports.mydevicelist=mydevicelist
 })
 .catch(function (error) {
   console.log(error);
 });
 
 }
/**
 * show department list with id
 */
 function show_department(token){
   
  var data = JSON.stringify({
    "Yourtoken":  token
  });
  
  var config = {
    method: 'post',
    url: 'https://barfas.iran.liara.run/finddepartment',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
   axios(config)
  .then(function (response) {
   const departmenlist =  response.data
     exports.departmenlist=departmenlist
  })
  .catch(function (error) {
    console.log(error);
  });
}

/**
 * login 
 */
function Login_main(username,password){
var data = JSON.stringify({
  "EmailAddress": username,
  "Password": password
});

var config = {
  method: 'post',
  url: 'https://barfas.iran.liara.run/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
 const loginitems = response.data
 exports.loginitems=loginitems
})
.catch(function (error) {
  console.log(error);
});

}
/**
 * show profile with token
 */
function Profile(token){
  var data = JSON.stringify({
    "Yourtoken": token
  });
  
  var config = {
    method: 'post',
    url: 'https://barfas.iran.liara.run/finduserswithid',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    const profileitems =  response.data
    exports.profileitems = profileitems
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
 

exports.show_tabble=show_tabble
exports.show_mydevice=show_mydevice
exports.show_department=show_department
exports.Login_main=Login_main
exports.Profile=Profile

