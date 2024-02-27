//const bcrypt = require('bcrypt')
import bcrypt from 'bcrypt'
import express from 'express'

const app = express()
app.use(express.json())
const users = [

]
app.post('/signup', async(req, res) => {
    const { username , password } = req.body
    const hash = await bcrypt.hash(password, 13)
    users.push({
        username,
        password: hash
    })

    console.log(users)
    res.send('ok')
}) 

app.post('/', async(req, res) => {
    const { username , password } = req.body
    const user = users.find(u => u.username === username)
         if(!user){
            res.send("wrong user")
            return
         }
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid){
            res.send("wrong password")
            return
        }

        //send a cookie
        //send a jwt token
        res.send('ok')
    })

app.listen(8080, () => console.log('listening on port 8080'))





//const password = 'Password1'

//const salt = bcrypt.genSaltSync(10)
//console.time("hash")
//const hash = await bcrypt.hash(password, 13)
//console.timeEnd("hash")
//const isMatch = await bcrypt.compare("Password1", hash)

//console.log({ isMatch
   // password, 
    //salt,
   // hash
//})


// using EXpress
