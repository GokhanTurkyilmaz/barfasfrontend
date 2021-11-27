
var axios = require('axios');
var alert=require('alert')
function personadd(token1,Name,FullName,Email,PhoneNumber,Password,Sex,
    Departman,token,PersonnelId,StaffCode,Whether,SeniorMode,
    CardNo,PunchPwd,EntryStatus,IDNO,Positsion,StaffType,Degree,Address,tell,Photo){
    var data = JSON.stringify({
        "token": token1,
        "Name": Name,
        "FullName": FullName,
        "Email": Email,
        "PhoneNumber": PhoneNumber,
        "Password": Password,
        "Sex": Sex,
        "Role": {
          "Admin": "false",
          "Customer": "false",
          "EndUser": "true"
        },
        "Departman": Departman,
        "Yourtoken": token,
        "PersonnelId": PersonnelId,
        "StaffCode": StaffCode,
        "situation":{
          "Whether":Whether,
          "SeniorMode":SeniorMode
        },
        "CardNo": CardNo,
        "PunchPwd": PunchPwd,
        "EntryStatus": EntryStatus,
        "IDNO": IDNO,
        "Positsion": Positsion,
        "StaffType": StaffType,
        "Degree": Degree,
        "Address": Address,
        "tell": tell,
        "Photo": "/test"
      });
      
      var config = {
        method: 'post',
       url: 'https://barfas.iran.liara.run/insert/users',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        const additem = JSON.stringify(response.data)
        console.log(additem)
        const dataadd = JSON.parse(additem) 
            if (dataadd.Status === true){
                const personAddItems = dataadd.Status;
                exports.personAddItems=personAddItems;
                alert("Ekleme Durumu:"+dataadd.Status)
            }else {
              res.send("err!")
            }
      })
      .catch(function (error) {
        console.log(error);
      });
}
exports.personadd=personadd;