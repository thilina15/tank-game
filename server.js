const express =require('express')
const app = express()

const mainRoute = require('./routes/main')
app.listen(process.env.PORT || 3000)

app.use('/main',mainRoute)

app.get('/',(req,res)=>{
    res.send('hellow')
})


//app.get('/main',mainRoute)