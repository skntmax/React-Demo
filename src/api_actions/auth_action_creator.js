export const loggedInUserData =(loggedindata)=>{
     
    return async function(dispatch , data ) {
        dispatch( {
            type:'GET_USER_DATA',
            payload:{
                 data:loggedindata
            }
        })
         
    }
}