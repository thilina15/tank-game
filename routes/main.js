const express =require('express')
const router = express.Router()





router.get('/',(req,res)=>{
    
    //res.sendFile('../HTML5/tank-HTML5-Shipping.html', {root:__dirname})
    res.sendFile('../HTML5/test.html', {root:__dirname})

})



module.exports =router