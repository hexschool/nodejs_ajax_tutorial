
# 六角學院 AJAX 練習

注意，此範例僅供練習，並不會儲存用戶資料至資料庫(僅緩存)。

### 註冊

新增一個帳號。

- Method: `POST`
- URL: `https://hexschool-tutorial.herokuapp.com/api/signup`
- Success Response:
  ```
  {
    "success": true,
    "result": {},
    "message": "帳號註冊成功"
  }
  ```
- Error Response:
  ```
  {
    "success": false,
    "result": {},
    "message": "此帳號已被使用"
  }
  ```


### 登入

登入一個已存在的帳號。

- Method: `POST`
- URL: `https://hexschool-tutorial.herokuapp.com/api/signip`
- Success Response:
  ```
  {
    "success": true,
    "result": {},
    "message": "登入成功"
  }
  ```
- Error Response:
  ```
  {
    "success": false,
    "result": {},
    "message": "此帳號不存在或帳號密碼錯誤"
  }
  ```
