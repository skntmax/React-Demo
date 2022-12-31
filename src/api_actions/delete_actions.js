import axios from "axios";
import { getAuthHeader } from "./user_acitons";


export const deleteBlogById =async (id)=>{
  try{
     
    let deleted = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/delete/${id}`,getAuthHeader())
     if(deleted) {
         return deleted.data
     }  

  }catch(err) {
    return err
  }
     

}