var express = require('express');
var router = express.Router();
const validator = require("email-validator");

let users = [
  {
    email: 'lovef2e@hexschool.com',
    password: '12345678'
  }
]

/* GET home page. */
router.post('/signup', function(req, res, next) {
  let data = req.body;
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
    res.send('此帳號已被使用');
  } else if(!emailCheck){
    res.send('Email 格式不正確');
  } else if (!passwordCheck) {
    res.send('密碼不得為空');
  } else {
    users.push(data);
    res.send('帳號註冊成功');
  }
  
  console.log(users)
  res.end();
});

router.post('/signin', function(req, res, next) {
  let data = req.body;
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
    res.send('Email 格式不正確');
  } else if (!passwordCheck) {
    res.send('密碼不得為空');
  } else if(!compare) {
    res.send('此帳號不存在或帳號密碼錯誤');
  } else {
    res.send('登入成功');
  }
  res.end();
});

module.exports = router;
