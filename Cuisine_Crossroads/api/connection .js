const mysql = require('mysql');
const express = require('express');

// Create a MySQL connection object.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Paras85560',
  database: 'cuisine_crossroads'
});

connection.connect(connection,(error)=>{
    
if(error){
    console.log(error.message)
}else{
    console.log("Database Connected")
}
})

module.exports = connection