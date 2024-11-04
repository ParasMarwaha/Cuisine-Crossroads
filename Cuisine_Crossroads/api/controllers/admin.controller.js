const { response } = require("express")
const connection = require("../connection ")
const {sign} = require('jsonwebtoken')

function  AddCategory(req,res){
    try{
        console.log(req.body)
        const {CategoryName} = req.body
        const insert =`insert into category (CategoryName) values ('${CategoryName}')`
        connection.query(insert,(error)=>{
            if(error){
                res.json({error:error.message, message:''})
            }else{
                res.json({error:'', message:'Category Added'})
            }
        })
    }
    catch(e){

    }

}

function ReadCategory(req,res){

    let read = `select * from category`
    connection.query(read,(error,records)=>{
        if(error){
            res.json({error:error.message , records:[]})
        }else{
            res.json({error:'' , records:records})
        }
    })
}

async function DeleteCategory(req,res){
    let {id}= req.params;
    let deleteCategory = `delete from category where id=${id}`
    connection.query(deleteCategory,(error)=>{
        if(error){
            res.json({error:error.message , message:''})
        }else{
            res.json({error:'' , message:'Category Deleted'})
        }
    })
}

function AdminLogin(req,res){
    // console.log(req.body)
     let {email, password}= req.body
 
     if(email == '' || password== ''){
         res.json({error:'ALL FIELDS ARE REQUIRED', message:''})
     }else{
         // Authentication
         let checkUser= `SELECT * FROM admin WHERE email = '${email}' and password = '${password}'`
         //console.log(checkUser)
         connection.query(checkUser,(error,record)=>{
             if(error){
                  res.json({error: error.message, message :''})
             }else{
                 // console.log(record.length)
                  if(record.length == 0){
                  res.json({error:"Invalid Email or Password", message: ''})
                 }else{
                    //  console.log(record)
                     let payload = {
                         id : record[0].id,
                         email: record[0].email,
                         password: record[0].password
                     }
                      let secret = "abc@123"
                      let expiry = 60 * 60
 
                      let token = sign(payload,secret,{expiresIn:expiry})
                    //  console.log(token)
                    
                    //   res.cookie('customerToken',token,
                    //   {expires : new Date (Date.now() + expiry  * 1000)})
                    
                    //localStorage.setItem("adminToken",token)
                    res.json({error: '', message :'Login Success', token:token})
                  }
              }
          })
 
     }
 }

async function ChangePassword(req,res){
    try {
        let {password,newpassword,confirmpassword}=req.body
        console.log(req.adminInfo)
        let {id} = req['adminInfo'];
        console.log(id)
    
        let checkOldpassword = `select * from admin where id= ${id}`
        connection.query(checkOldpassword,(error,record)=>{
            if(error){
                res.json({error:error.message, message:''})
            }else{
               if(record[0].password != password){
                res.json({error:'Invalid current password', message:''})
               }else{
                if(newpassword!=confirmpassword){
                    res.json({error:'Enter Same New Password', message:''})
                }else{
                    let updateCommand = `update admin set password = ${newpassword} where id= ${id} `
                    connection.query(updateCommand,(error,record)=>{
                        if(error){
                            res.json({error:error.message, message:''})
                        }else{
                            res.json({error:'', message:'Password Updated.'})
                        }
                    })
                }
              
               }
             
            }
        })

      } catch (error) {
        res.json({error:error.message, message:''})
      }
}

async function UserSignup(req,res){
    //console.log(req.body)
    try {
        const {email,fullname,gender,state,password,mobile,address,city} = req.body
        const insert= `insert into usersignup (email,password,full_name,phone,gender,address,state,city) values ('${email}','${password}','${fullname}','${mobile}','${gender}','${address}','${state}','${city}')`
        connection.query(insert,(error)=>{
            if(error){
                res.json({error:error.message, message:''})
            }else{
                res.json({error:'', message:'User Added'})
            }
        })
    } catch (error) {
        
    }
}

async function UserSignin(req,res){
    console.log(req.body)
    let {email, password}= req.body
 
     if(email == '' || password== ''){
         res.json({error:'ALL FIELDS ARE REQUIRED', message:''})
     }else{
         // Authentication
        let enter= `SELECT * FROM usersignup WHERE email = '${email}' and password = '${password}'`
        console.log(enter)
         connection.query(enter,(error,record)=>{
             if(error){
                  res.json({error: error.message, message :''})
             }else{
                 // console.log(record.length)
                  if(record.length == 0){
                  res.json({error:"Invalid Email or Password", message: ''})
                 }else{
                    //  console.log(record)
                     let payload = {
                         id : record[0].id,
                         email: record[0].email,
                         password: record[0].password
                     }
                      let secret = "abc@123"
                      let expiry = 60 * 60
 
                      let token = sign(payload,secret,{expiresIn:expiry})
                    //  console.log(token)
                    res.json({error: '', message :'Login Success', token:token})
                  }
              }
          })
        }
}

async function UserChangePass(req,res){
    try {
        let {password,newpassword,confirmpassword}=req.body
        console.log(req.body)
        console.log(req.userInfo)
        let {id} = req['userInfo'];
        console.log(id)
    
        let checkOldpassword = `select * from usersignup where id= ${id}`
        connection.query(checkOldpassword,(error,record)=>{
            if(error){
                res.json({error:error.message, message:''})
            }else{
               if(record[0].password != password){
                res.json({error:'Invalid current password', message:''})
               }else{
                if(newpassword!=confirmpassword){
                    res.json({error:'Enter Same New Password', message:''})
                }else{
                    let updateCommand = `update usersignup set password = ${newpassword} where id= ${id} `
                    connection.query(updateCommand,(error,record)=>{
                        if(error){
                            res.json({error:error.message, message:''})
                        }else{
                            res.json({error:'', message:'Password Updated.'})
                        }
                    })
                }
              
               }
             
            }
        })

      } catch (error) {
        res.json({error:error.message, message:''})
      }

}

async function ResSignup(req,res){
    console.log(req.body)
    try {
        const {name,email,opentime,closetime,description,mobile,address,password,city,state} = req.body
        const insert = `INSERT INTO restaurant (name,description,mobile,email,password,address,opening_hours,closing_hours,city,state,status) VALUES ('${name}','${description}','${mobile}','${email}','${password}','${address}','${opentime}','${closetime}','${city}','${state}',"pending")`
        connection.query(insert,(error)=>{
            if(error){
                res.json({error:error.message, message:''})
            }else{
                res.json({error:'', message:'User Added'})
            }
        })
    } catch (error) {
        
    }
}

async function ResSignin(req,res){
    console.log(req.body)
    let {email, password}= req.body
 
     if(email == '' || password== ''){
         res.json({error:'ALL FIELDS ARE REQUIRED', message:''})
     }else{
         // Authentication
        let check= `SELECT * FROM restaurant WHERE email = '${email}'`
         connection.query(check,(error,record)=>{
             if(error){
                  res.json({error: error.message, message :''})
             }else{
                 // console.log(record.length)
                  if(record.length == 0){
                  res.json({error:"Invalid Email or Password", message: ''})
                 }else{
                    if(record[0].status === 'pending'){
                        res.json({error:"Approval Pending", message: ''})
                    } else if(record[0].status ==='rejected'){
                        res.json({error:"Login Blocked by Admin", message: ''})
                    }else{
                        if(record[0].password != password){
                            res.json({error:"Invalid Email or Password", message: ''})
                        }else{
                            let payload = {
                                id: record[0].id,
                                email: record[0].email,
                                fullName: record[0].fullName
                            }
                            // verify
                            let secret = "abc@123"
                            let expiry = 60 * 60//1 minute
                            // create
                            let token = sign(payload, secret, {expiresIn: expiry})
                            //console.log(token)

                            // res.cookie('customerToken', token, {
                            //     expires: new Date(Date.now() + expiry * 1000)
                            // })
                            res.json({error: '', message: 'Login Success',token:token})
                        }
                    }
                 }
                }
          })
        }
}

async function CheckRes(req,res){
    console.log(req.body)
    let read = `select * from restaurant`
    connection.query(read,(error,records)=>{
        if(error){
            res.json({error:error.message , records:[]})
        }else{
            res.json({error:'' , records:records})
        }
    })
}

async function UpdateStatus(req,res){
    //console.log(req.body)
    const {res_id,status} = req.body
    const update= `UPDATE restaurant SET status = '${status}' WHERE id = '${res_id}'`
    connection.query(update,(error)=>{
        if(error){
            res.json({error:error.message , message:''})
        }else{
            res.json({error:'' , message:'Status Updated'})
        }
    })
}

async function AddItem(req,res){
    console.log(req.body)
    console.log(req.resInfo)
    let {id} = req.resInfo
    try {
        const {name,price,discount,description,category} = req.body
        const insert = `INSERT INTO menu (name,description,price,discount,category,restaurant_id) VALUES ('${name}','${description}','${price}','${discount}','${category}','${id}')`
        connection.query(insert,(error)=>{
            if(error){
                res.json({error:error.message, message:''})
            }else{
                res.json({error:'', message:'Item Added'})
            }
        })
    } catch (error) {
        
    }
}

async function ResMenuPhoto(req, res) {
    let {menuId} = req.body;
    let {photo} = req.files;

    let serverPath = `public/images/menu/${photo.name}`;
    let dbPath = `/images/menu/${photo.name}`;

    photo.mv(serverPath, (error) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            let updatePathInDB = `Update menu Set image='${dbPath}' Where id=${menuId}`;
            connection.query(updatePathInDB, (error) => {
                if (error) {
                    res.json({error: error.message, message: ""});
                } else {
                    res.json({error: '', message: 'Photo added Successfully.'});
                }
            })
        }
    })
}

async function ReadMenu(req, res) {
    let {id} = req.ResInfo;
    let readCommand = `Select * from menu Where restaurant_id=${id}`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records})
        }
    })
}

async function ReadAllRes(req, res) {
    
    let readCommand = `Select * from restaurant `;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records})
        }
    })
}

async function DeleteMenu(req,res){
    console.log(req.params)
    let {id}= req.params;
    let deleteCategory = `delete from menu where id=${id}`
    connection.query(deleteCategory,(error)=>{
        if(error){
            res.json({error:error.message , message:''})
        }else{
            res.json({error:'' , message:'Category Deleted'})
        }
    })
}

async function AddResPhoto(req,res){
    //console.log(req.body)
    //console.log(req.resInfo)
    let{photo} = req.files
    let {id} = req.resInfo
    

    let serverPath = `public/images/restaurant/${photo.name}`;
    let dbPath = `/images/restaurant/${photo.name}`;

    photo.mv(serverPath, (error) => {
        if (error) {
            res.json({error: error.message, message: ''});
        } else {
            let insert = `Update restaurant Set image='${dbPath}' Where id='${id}'`;
            console.log(insert)
            connection.query(insert, (error) => {
                if (error) {
                    res.json({error: error.message, message: ""});
                } else {
                    res.json({error: '', message: 'Photo added Successfully.'});
                }
            })
        }
    })
}

async function ReadRes(req,res){
    //console.log(req.ResInfo)
    let {id} = req.ResInfo;
    let readCommand = `Select * from restaurant Where id=${id}`;
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records})
        }
    })

}

async function GetResMenu(req,res){
    //console.log(req.params)
    let{res_id} = req.params
    let readCommand = `Select * from menu Where restaurant_id=${res_id}`;
    //console.log(readCommand)
    connection.query(readCommand, (error, records) => {
        if (error) {
            res.json({error: error.message, records: []});
        } else {
            res.json({error: "", records: records})
        }
    })
}

async function AddToCart(req,res){

    //console.log(req.params);
    //console.log(req['userInfo']);
    let{food_id} = req.params;
    let{id} = req['userInfo']

    let checkCart = `Select * From cart Where user_id=${id} AND food_id=${food_id}`;
    connection.query(checkCart, (error, record) => {
        if (error) {
            res.json({error: error.message, message: ''})
        } else {
            if (record.length > 0) {
                let quantity = record[0].quantity + 1;
                let updateQuantity = `Update cart Set quantity=${quantity} Where user_id=${id} AND food_id=${food_id}`;
                connection.query(updateQuantity, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''})
                    } else {
                        res.json({error: '', message: "Product already exists in cart"})
                    }
                });
            } else {
                // add to cart
                let saveCart = `Insert Into cart ( food_id, quantity,user_id ) Values('${food_id}', 1, '${id}')`;
                connection.query(saveCart, (error) => {
                    if (error) {
                        res.json({error: error.message, message: ''})
                    } else {
                        res.json({error: '', message: "Product added in cart"})
                    }
                });
            }
        }
    });
}

async function ReadCart(req,res){
    let {id} = req['userInfo'];

    let readData = `select * from cart inner join menu on cart.food_id=menu.id where user_id=${id}`;
    connection.query(readData, (error, records) => {
        if(error) {
            res.json({error: error.message});
        } else {
            res.json({error: '', records: records})
        }
    });

}

function RemoveCartItem(req, res) {
    let {id} = req.params;

    let removeItem = `Delete From cart Where food_id=${id}`;
   // console.log(removeItem)
    connection.query(removeItem, (error) => {
        if(error) {
            res.json({error: error.message})
        } else {
            res.json({error: '', message: 'Product removed from cart'});
        }
    });
}


function ReadUserInfo(req,res){
    //console.log(req.params)
    let{id} = req['userInfo']
    let getData = `Select * From usersignup Where id=${id}`;
    //console.log(getData)
    connection.query(getData, (error,records) => {
        if(error) {
            res.json({error: error.message, records: []})
        } else {
            res.json({error: "", records: records});
        }
    });
}

async function UpdateQuantity(req,res){
    //console.log(req.params)
    let{id} = req['userInfo']
    let{food_id,action} = req.params
    let getData = `Select * From cart Where food_id=${food_id} AND user_id = ${id}`;

    connection.query(getData, (error,record) => {
        if(error) {
            res.json({error: error.message, message:''})
        } else {
            let quantity = record[0].quantity

            if(action== "dec" && quantity>1){
                quantity = quantity - 1 ;
            }else if(action == "inc"){
                quantity = quantity + 1 ;
            }

            let Update = `Update cart set quantity =${quantity} Where food_id=${food_id} AND user_id = ${id}`
            connection.query(Update, (error) => {
                if(error) {
                    res.json({error: error.message, message:''})
                }else{

                    res.json({error: "", message:'Quantity Updated'});
                }
        
    });

}
    })
}


// async function Bill(req,res){
//     //console.log(req.body)
//     let{id} = req['userInfo']
    
//     // try {
//     //     const {full_name,landmark,state,phone,address,city} = req.body
//     //     const insert= `insert into bill (total,payment_mode,address,city,phone,order_notes,user_id,state,payment_status,paymennt_date,restaurant_name,track_id,track_url,recieved_by,otp,pincode,landmark)
//     //      values ('0','online','${address}','${city}','${phone}','12345','${id}','${state}','N.A','2024-05-24','Crossroad Cuisine','24052024','http','${full_name}','0000','143001','${landmark}')`
//     //     connection.query(insert,(error)=>{
//     //         if(error){
//     //             res.json({error:error.message, message:''})
//     //         }else{
//     //             res.json({error:'', message:'User Added'})
//     //         }
//     //     })
//     // } catch (error) {
        
//     // }

// }

async function PlaceOrder(req,res){
    console.log(req.body)
    let{id} = req['userInfo']
    
        try {
            const {landmark, total, payment_mode, address, city, phone, state, cart,order_notes,full_name} = req.body;
            let payment_status = "Pending";
            if (payment_mode === "Online") {
                payment_status = "Paid";
            }
            // let payment_date = "";
    
            /* insert into bill table... */
            const bill = `Insert Into bill(total,payment_mode,address,city,phone,order_notes,user_id,state,payment_status,paymennt_date,recieved_by,pincode,landmark)
                           Values('${total}', '${payment_mode}', '${address}', '${city}', ${phone}, '${order_notes}', '${id}', '${state}', '${payment_status}', NOW(),'${full_name}',"143001",'${landmark}')`;
            // const bill = Insert Into bill(total, payment_mode, address, city, pincode, phone, user_id, state, payment_status, payment_date) Values(${total}, '${payment_mode}', '${address}', '${city}', ${pinCode}, '${phone}', ${id}, '${state}', '${payment_status}', CURRENT_DATE);
            
            //console.log(bill)
            connection.query(bill, (error, record) => {
                if (error) {
                    res.json({error: error.message})
                }else {
                        const bill_id = record.insertId;
                        let counter = 1;
                        let cartLength = cart.length;
                        let lastRowInserted = false;
        
                        for (let i = 0; i < cartLength; i++) {
                            let {food_id, quantity, price} = cart[i];
        
                            let net_price = price * quantity;
        
                            /* insert multiple rows into bill details table... */
                            let billDetails = `Insert Into bill_details(bill_id, food_id, quantity, price, net_price) Values(${bill_id}, ${food_id}, ${quantity}, ${price}, ${net_price})`;
                            connection.query(billDetails, (error) => {
                                if (error) {
                                    res.json({error: error.message})
                                }
    
                                if (counter === cartLength) {
                                    /* empty cart table for the current customer... */
                                    const deleteCart = `Delete From cart where user_id=${id}`;
                                    connection.query(deleteCart, (error) => {
                                        if (error) {
                                            return res.json({error: error.message})
                                        }
                                        res.json({error: "", message: "Order Placed", bill_id});
                                    })
                                }
        
                                counter++;
                            })
                        }
                    }
            })
        } catch (e) {
            res.json({error: e.message})
        }
    
}

const OrderDetails = (rows) => {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < rows.length; i++) {
            let bill_details = `SELECT bill_details.*, menu.name, menu.image FROM bill_details INNER JOIN menu ON bill_details.food_id=menu.id WHERE bill_details.bill_id= ${rows[i].id}`;
            connection.query(bill_details, (error, row) => {
                rows[i].order_details = row;
                counter++;
                if (counter === rows.length) {
                    resolve(rows);
                }
            });
        }
    });
};


async function MyOrders(req,res){

    try {
        const {id} = req['userInfo'];

        const orders = `SELECT *, DATE_FORMAT(paymennt_date, "%Y-%m-%d") AS payment_date FROM bill WHERE user_id= ${id} ORDER BY id DESC`;
        connection.query(orders, async (error, records) => {
            if (error) {
                return res.json({error: error.message})
            }

            await OrderDetails(records);

            res.json({error: "", records});
        })
    } catch (e) {
        res.json({error: e.message})
    }
}


module.exports={
    AddCategory,
    MyOrders,
    ReadAllRes,
    ReadCategory,
    DeleteCategory,
    AdminLogin,
    ChangePassword,
    UserSignup,
    UserSignin,
    UserChangePass,
    ResSignup,
    ResSignin,
    CheckRes,
    UpdateStatus,
    AddItem,
    ResMenuPhoto,
    ReadMenu,
    DeleteMenu,
    AddResPhoto,
    ReadRes,
    GetResMenu,
    AddToCart,
    ReadCart,
    RemoveCartItem,
    ReadUserInfo,
    UpdateQuantity,
    // Bill,
    PlaceOrder
}