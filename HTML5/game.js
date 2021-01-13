const express =require('express')
const router = express.Router()

var velox=0
var veloy=0
var veloz=0





router.get('/',(req,res)=>{
    res.sendFile('tank-HTML5-Shipping.html', {root:__dirname})
    //res.sendFile('test.html', {root:__dirname})
})

router.get('/getvelosity',(req,res)=>{
    res.json({x:velox, y:veloy, z:veloz})
})

router.get('/setvelosity',(req,res)=>{
    velox=req.query.x
    veloy=req.query.y
    veloz=req.query.z
    res.send('elox') 
})

router.get('/getz',(req,res)=>{
    
})

router.get('/velosityB',(req,res)=>{
    res.send(velosityB)
})


module.exports =router