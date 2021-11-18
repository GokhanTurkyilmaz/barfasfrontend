var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://api.binance.com/api/v3/ticker/24hr',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {

  const data = response.data

  const kbidQty = data[5].bidQty
  const faskQty = data[5].askQty


  if (kbidQty > faskQty ){
      console.log("will go up ")
  }
  else{
      console.log("will go down")
  }




})
.catch(function (error) {
  console.log(error);
});
