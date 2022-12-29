// // Math.floor(Math.sqrt(num))

// function con(ele) {
     
//      let res = ele*ele
//      let rmdr = res%ele
//             if(rmdr==0) {
//                 return ele
//             }else{
//                 return ele 
//             }
                
// }
 


// function checkSqrt(item) {
     
//      if(item%2==0) {
//          return item
//      }
    
// }

//  console.log(con(5)); 


 
// employee 

// [2:21 PM] Gourav Kumar
//     write a query to get sum of all salary for all unique empposition
// ​[2:22 PM] Gourav Kumar
//     Tech Lead - 4500000


empid, empposiiton , doj , sal
1     ik                9  00 
2     ik                9  01 
3     ie                9  00 
4     ie                9  02 


select   distinct(empposiiton) as "empposiiton" , sum(sal) as "salary" from employee  
group by empposiiton  ; 










