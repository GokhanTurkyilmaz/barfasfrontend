/**
 * show tabbles api
 */
var axios = require('axios');

function show_tabble(id){
var data = JSON.stringify({
  "id": ""+id+""
});

var config = {
  method: 'post',
 ///url: 'https://barfas-server.herokuapp.com/tabbleslist',
  url: 'http://localhost:3000/tabbleslist',
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
 function show_mydevice(id){
   
 var data = JSON.stringify({
   "id": ""+id+""
 });
 
 var config = {
   method: 'post',
   ///url: 'https://barfas-server.herokuapp.com/finddevicewithid',
   url: 'http://localhost:3000/finddevicewithid',
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
 function show_department(id){
   
  var data = JSON.stringify({
    "UserId":  ""+id+""
  });
  
  var config = {
    method: 'post',
    ///url: 'https://barfas-server.herokuapp.com/finddepartment',
    url: 'http://localhost:3000/finddepartment',
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
exports.show_tabble=show_tabble
exports.show_mydevice=show_mydevice
exports.show_department=show_department