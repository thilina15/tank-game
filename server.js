const express =require('express')
const app = express()

app.use(express.static('HTML5'))

const mainRoute = require('./routes/main')
const gameRoute = require('./HTML5/game')
app.listen(process.env.PORT || 3000)

app.use('/main',mainRoute)
app.use('/game', gameRoute)

app.get('/',(req,res)=>{
    res.send('hellow')
})


//app.get('/main',mainRoute)