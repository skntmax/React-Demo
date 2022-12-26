import axios from "axios"

export const validateUser = async (username) =>{
   try{
     let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/login/${username }`, getAuthHeader() )
       const {data} =res
       return data
   }catch(err){ 
    return err
   }

}



export const getAuthHeader = () => {
    const token = localStorage.getItem('blog-user');
    const header = {
      headers: { Authorization: "Bearer " + token },
    };
    return header;
  };

  