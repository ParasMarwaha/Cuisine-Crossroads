 const express = require('express')
// const connection = require('./connection ')
 const app = express()
 const adminController = require("./controllers/admin.controller")
const cors = require("cors")
const fileUpload = require('express-fileupload')
const {verify} = require('jsonwebtoken')

 app.use(cors())
 app.use(express.json())
 app.use(fileUpload())
 app.use(express.static('public'))


function AdminAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        // verify token
        req['adminInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message:''})
    }
}

function UserAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        // verify token
        req['userInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message:''})
    }
}

function UserAuthorization_Get_HTTP_Request(req, res, next) {
  //console.log(req.headers.authorization)
  let token = req.headers.authorization.split(" ")[1]
  if (!token) {
    return res.json({error: 'Unauthorized Access', message: ''})
}

let secret = "abc@123"

try {
    // verify token
    req['userInfo'] = verify(token, secret) // return data
    next()
} catch (error) {
    res.json({error: error.message, message:''})
}
}


function ResAuthorization_HTTP_Request(req, res, next) {
    // console.log(req.body);
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        // verify token
        req['resInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message:''})
    }
}

function ResAuthorization_GET_HTTP_Request(req, res, next) {
    // console.log(req.headers.authorization)
    if (!req.headers.authorization) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.headers.authorization.split(" ")[1];
    // console.log(token)
    let secret = "abc@123"

    try {
        // verify token
        req['ResInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

 app.get("/",(req,res)=>{
    res.send("Response from server")

 })

 app.get("/category",adminController.ReadCategory)
 app.post("/category",adminController.AddCategory)
 app.post("/user-signup",adminController.UserSignup)
 app.post("/user-signin",adminController.UserSignin)
 app.post("/res-signup",adminController.ResSignup)
 app.get("/admin/checkres",adminController.CheckRes)
 app.post("/admin/checkres",adminController.UpdateStatus)
 app.delete("/category/:id",adminController.DeleteCategory)
 app.delete("/res/menu/:id",adminController.DeleteMenu)
 app.delete("/removecartitem/:id",adminController.RemoveCartItem)

 app.get("/menu",adminController.ReadAllRes)
 app.get("/getresmenu/:res_id",adminController.GetResMenu)
 app.get("/addtocart/:food_id",UserAuthorization_Get_HTTP_Request,adminController.AddToCart)
 app.get("/read-cart-data",UserAuthorization_Get_HTTP_Request,adminController.ReadCart)
 app.get("/update-cart-item/:food_id/:action",UserAuthorization_Get_HTTP_Request,adminController.UpdateQuantity)
 app.get("/readuser",UserAuthorization_Get_HTTP_Request,adminController.ReadUserInfo)
//app.post("/bill",UserAuthorization_HTTP_Request,adminController.Bill)

 app.post("/adminlogin",adminController.AdminLogin)
 app.post("/res-signin",adminController.ResSignin)
 app.post("/res/res-menu-photo",adminController.ResMenuPhoto)
 app.post("/res/res-signup-photo", ResAuthorization_HTTP_Request, adminController.AddResPhoto)
 app.post("/res/menu",ResAuthorization_HTTP_Request,adminController.AddItem)
 app.get("/res/menu",ResAuthorization_GET_HTTP_Request,adminController.ReadMenu)
 app.get("/res-signin",ResAuthorization_GET_HTTP_Request,adminController.ReadRes)
 app.post("/change-password", AdminAuthorization_HTTP_Request,adminController.ChangePassword)
 app.post("/userchangepass", UserAuthorization_HTTP_Request, adminController.UserChangePass)
 app.post("/place-order", UserAuthorization_Get_HTTP_Request, adminController.PlaceOrder)
 app.get("/my-orders", UserAuthorization_Get_HTTP_Request, adminController.MyOrders);



 const PORT = 3000
 app.listen(PORT,(error)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log("Server is running")
    }
 })