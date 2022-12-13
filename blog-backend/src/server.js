import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import {middlewares} from './middlewares'
import { conn } from './databse/connection'
import cors from 'cors'
let app = express() 
let port  = process.env.PORT 


// ----------------middlewares ---------------
middlewares(app)
// ----------------middlewares ---------------
  

app.get( '/'  , (req,res)=> {      
     console.log("home page " , req.body );
})

app.listen(port,()=>{
   console.log(" server connected at  "+port );
})