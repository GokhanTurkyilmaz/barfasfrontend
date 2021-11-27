
var axios = require('axios');
var toastr = require('toastr');
var alert=require('alert')
var serverUrl = "https://barfas.iran.liara.run"

function deviceadd(DeviceName,Sn,Model,Type,Department,DeviceIP,DeviceAdmin,DeviceSuperUser,Remark,UserId,role){
  var data = JSON.stringify({
    "DeviceName": DeviceName,
    "SN": Sn,
    "Model": Model,
    "Type": Type,
    "Department": Department,
    "DeviceIP": DeviceIP,
    "DeviceAdmin":DeviceAdmin,
    "DeviceSuperUser":DeviceSuperUser,
    "Remark": Remark,
    "UserId": UserId,
    "role": role
  });
  
  var config = {
    method: 'post',
    url: 'https://barfas.iran.liara.run/insert/device/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    const deviceAddItems = JSON.stringify(response.data)
    exports.deviceAddItems=deviceAddItems;
    alert("Ekleme Durumu:"+JSON.stringify(response.data.Status))
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    alert(error);
    console.log(error);
  });
  
}

exports.deviceadd=deviceadd;