const express =require('express')
const router = express.Router()





router.get('/',(req,res)=>{
    res.sendFile('tank-HTML5-Shipping.html', {root:__dirname})
    //res.sendFile('test.html', {root:__dirname})
})



module.exports =router