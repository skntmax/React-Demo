import React from 'react'


// 📁
function folder({item}) {

    if(item.isFolder) {
        return (
             <span>  {item.name} <folder item={item} /> </span> 
            ) 
    }

    else{
         return "🗄️"+item.name   

    }


   
}

export default folder