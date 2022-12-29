import axios from "axios"
import { getAuthHeader } from "./user_acitons"
export const getUserBlogsLst  =async (username)=>{
 
     try{
        let res= await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/get/files/${username}` , getAuthHeader()  )
         return res.data
     }catch(err) {
        return err
     }
     
}