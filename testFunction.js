
    var str = 'Tredence Beyond Possible';
    // Output = ecnederT dnoyeB elbissoP

     let val =  str.split(' ').map((ele)=>{
      return ele.split('').reverse(ele).join('')
 }).join(' ')  
  
     console.log(val);
