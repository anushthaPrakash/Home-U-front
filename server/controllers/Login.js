const express = require('express');

exports.authSuccess = async(req, res)=>{
    
    console.log(req);

    console.log(req.profile);
    
    if(!req.user){
        res.redirect('http://localhost:4000/login');
    }else{
        res.redirect('http://localhost:4000/');

    }

} 
// failure
exports.authFailure = async(req, res) =>{
    res.send("Error");
}
  