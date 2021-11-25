
// const User = require("../models/user.js");
// const https = require('https')
// const options = {
//   hostname: 'https://localhost:44353',
//   port: 44353,
//   path: '/api/auth/login',
//   method: 'POST'
// }

// export default class UserService {
//   constructor() {
//     this.httpClient = httpClient;
//   }

//   test(){
//     console.log("dddd");
//     const req = https.request(options, res => {
//         console.log(`statusCode: ${res.statusCode}`)
      
//         res.on('data', d => {
//           process.stdout.write(d)
//         })
//       })
//   }

//   login(loginUser) {
//     let path = "https://localhost:44353/api/auth/";
//     userToken: any;
//     decodedToken: any;

//     let httpHeaders = new HttpHeaders()
//     .set('Content-Type', 'application/json')
//     .set('Cache-Control', 'no-cache');

//     this.httpClient
//       .post(this.path + "login/", loginUser, {
//         responseType: "text",
//         headers: httpHeaders,
//       })
//       .subscribe((data) => {
//           console.log(data);
//       });
//   }

//   register() {
//     app.post("/register", (req, res) => {});
//   }
// }
