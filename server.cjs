//middleware
const express = require("express")
const app = express()

app.use(logger)

app.get('/',(req,res) => {
    console.log('home page')
    res.send('Home page')
    //next()

})

app.get('/users',auth ,(req,res) => {
    console.log(`user is admin =${req.admin}`)
    console.log('user page')
    res.send('user page')
}) 



function logger(req,res,next){
    console.log('before')
    next()
    console.log('after')
}

function auth(req,res,next){
    if(req.query.admin === "true"){
        next()
    } else {
        res.send('no auth')
    }
  //  console.log('Auth')
  //  next()
}

app.listen(3000, () => console.log('server started...'))