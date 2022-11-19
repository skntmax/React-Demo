let arr = [2,4,7,9,267,124,516552,452]

function insert(position,arr) {
      
     for(let i=arr.length; i>=position-1 ; i--) {
         arr[i+1] = arr[i]
          
     }
  arr.pop()    
  arr[position]  ="value inserted at 6  "
  
return arr  
}

console.log( insert(6,arr));


