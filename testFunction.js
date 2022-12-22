let arr =[[2] ,[4] ,[2] ,5 , 1 ,[12] , [211]]
 

  let flatArray = (arr,d)=>{
    
    let res = []
     while(d!=0) {
      for(let i;i<arr.length ; i++) {
          res.push(arr[i]) 
       }
       d--    
     }

     return res 
    
  }

  console.log(flatArray(arr,1));