var express = require('express')
var app=express()
var bodyparser=require("body-parser");
var cors = require('cors')
var jwt = require("jsonwebtoken");


app.use(cors())
app.use(bodyparser())

var knex=require("knex")({
        client:'mysql',
        connection:{
            'host':'localhost',
            'user':'root',
            'password':'thisisnaresh',
            'database':'Mobileshope'
        }
})

function create_table(tablename) {
    knex.schema.createTable(tablename, function (table) {
        table.increments(); //id 
        table.string('Firstname');
        table.string('Lastname');
        table.string('Email');
        table.string('Password');
      }).then(()=>{
          console.log('=========================================================================================== table created')
      }).catch(()=>{
          console.log('========================================================================= table already exist')
      })
}

// this fuction is to register with new user
app.post('/registration',(req,res)=>{
    create_table('user')
    knex.select("*").from("user").where("Email",req.body.Email)
    .then((data)=>{
        if(data.length<1){
            knex("user").insert(req.body).then(()=>{
                console.log('============================================= data inserted  to user ')
                var token=jwt.sign({email:req.body.Email},"lala")
                res.send({result:true,Token:token})                
            })
        }else{
            res.send({result:false})
        }
    })
})

// this is to login
app.post('/loginuser',(req,res)=>{
    create_table('user')
    knex.select("*").from("user").where("Email",req.body.Email)
    .then((data)=>{        
        if (data.length>0){
            if(data[0].Password == req.body.Password){
                var token=jwt.sign({email:data[0].Email},"lala")
                res.send({result:true,Token:token})                
            }else{
                res.send({result:false})
            }
        }else{
            res.send({result:false})
        }
    })
})


app.listen(8000)