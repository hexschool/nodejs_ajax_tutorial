var express = require('express');
var router = express.Router();
const validator = require("email-validator");

let users = [
  {
    email: 'lovef2e@hexschool.com',
    password: '12345678'
  }
];

const Response = function() {
  this.success = false;
  this.result = {};
  this.message = '';
}

/* GET home page. */
router.post('/signup', function(req, res, next) {
  let data = req.body;
  let response = new Response();
  let emailCheck;
  let compare = [];
  if (data.email) {
    emailCheck = validator.validate(data.email); // 比對格式 
    compare = users.filter((user)=> { // 比對是否有相同帳號
      console.log(user);
      return user.email.toLowerCase().indexOf(data.email) > -1;
    })
  }
  let passwordCheck = data.password;

  if (compare.length) { // 如果有相同帳號
    response.message = '此帳號已被使用';
    res.send(response);
  } else if(!emailCheck){
    response.message = 'Email 格式不正確';
    res.send(response);
  } else if (!passwordCheck) {
    response.message = '密碼不得為空';
    res.send(response);
  } else {
    users.push(data);
    response.message = '帳號註冊成功';
    response.success = true;
    res.send(response);
  }
  
  console.log(users)
  res.end();
});

router.post('/signin', function(req, res, next) {
  let data = req.body;
  let response = new Response();
  let emailCheck;
  let compare = false;
  let passwordCheck = data.password;
  if (data.email) {
    emailCheck = validator.validate(data.email); // 比對格式 

    for (var i = 0; i < users.length; i ++) {
      if (users[i].email == data.email && users[i].password == data.password) {
        compare = true;
        break;
      }
    }
  }

  console.log(compare)
  if (!emailCheck) {
    response.message = 'Email 格式不正確'
    res.send(response);
  } else if (!passwordCheck) {
    response.message = '密碼不得為空'
    res.send(response);
  } else if(!compare) {
    response.message = '此帳號不存在或帳號密碼錯誤'
    res.send(response);
  } else {
    response.message = '登入成功';
    response.success = true;
    res.send(response);
  }
  res.end();
});

module.exports = router;
