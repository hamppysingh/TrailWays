const express=require('express');
const router=express.Router();
router.use(express.json());
const multer = require('multer');
var connection=require("../dbconnect/dbconnect");

router.post("/signup/trekker",(req,res)=>{
    const result = [req.body.Tre_Uname,
        req.body.Tre_Name,
        req.body.Tre_Email,
        req.body.Tre_Mobile,
        req.body.Tre_Adhaar,
        req.body.Tre_Pass,
        req.body.Tre_Dob] ;
//    Tre_Image: null,
    const sql="insert into trekker(`Tre_Uname`,`Tre_Name`,`Tre_Email`,`Tre_Mobile`,`Tre_Adhaar`,`Tre_Pass`,`Tre_Dob`) values(?)"
        connection.query(sql,[result],(err,data)=>{
            if(err){
                console.log(" error in finding data!! "+err);
                res.json(err);
            }
            else{
                console.log(data);
                console.log("Executed Succesfully!!");
                res.json(data);
            }
        });
});
router.post("/signup/guide",(req,res)=>{
    const result = [req.body.G_Uname,
        req.body.G_Name,
        req.body.G_Email,
        req.body.G_Mobile,
        req.body.G_Adhaar,
        req.body.G_Pass,
        req.body.G_Dob,
        0,
        1,
        req.body.G_Lno,
        0];
        const result1=[req.body.G_Lno,req.body.GL_valid,req.body.GL_Color];
//    Tre_Image: null,
    const sql="insert into Guide(`G_Uname`,`G_Name`,`G_Email`,`G_Mob`,`G_Adhaar`,`G_Pass`,`G_Dob`,`G_Totalrating`,`G_Avail`,`G_GLno`,`G_Exp`) values(?)"
    const sql1="INSERT INTO Guide_License (`GL_Lno`,`GL_Valid`,`GL_Color`) VALUES (?)";
    connection.query(sql1,[result1],(err,data)=>{
            if(err){
                console.log(" error in finding data!! "+err);
                res.json(err);
            }
            else{
                connection.query(sql,[result],(err,data)=>{
                    if(err){
                        console.log(" error in finding data!! "+err);
                        res.json(err);
                    }
                    else{
                        console.log("Executed Succesfully!!");
                        res.json(data);
                    }
                });
            }
        });
});

router.get('/guide',(req,res)=>{
    connection.query("select * from guide",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});

module.exports=router;