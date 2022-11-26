let arr = [2,4,7,9,267,124,516552,452]

function insert(position,arr) {
      
     for(let i=arr.length; i>=position-1 ; i--) {
         arr[i+1] = arr[i]
     }
  arr.pop()    
  arr[position]  = "value inserted at 6 "
return arr  
}

console.log( insert(6,arr));
 



let a = 1
   a = 2  // let can be reassigned but can't be redeaclared 
   var x =123
    var x = 34  // var can be redeclare and resign ans have global scope 
   const c = [2,3]  // can neither redecalre nor reassigned 
     
console.log('====================================');
console.log("a",a);
console.log('====================================');

console.log('====================================');
console.log("x" ,x);
console.log('====================================');