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
  url: 'https://barfas-server.herokuapp.com/tabbleslist',
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
   url: 'https://barfas-server.herokuapp.com/finddevicewithid',
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

exports.show_tabble=show_tabble
exports.show_mydevice=show_mydevice