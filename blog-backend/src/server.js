import express from 'express'
import * as dotenv from 'dotenv'
import config from './config.js'
let app = express()
let port = config.PORT
dotenv.config()
let router = express.Router()
 
router.get('/test',(req,res)=>{
     console.log("hhi");
      res.json({ 
        message:" message sent succesfully "
     })
      
}) 

app.use('/user',router)

app.listen(port, ()=>{
    console.log("server connectd to "+port );
})


