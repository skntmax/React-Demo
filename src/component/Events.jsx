import React from 'react';

export default  function Events() {
  

    navigator.clipboard.readText().then((text )=>{
        console.log("copidd content " ,text );
    });
     

const onCopy =()=>{
    console.log("copy");
    alert(" you can't copy ") 
  }

 const onCut =()=>{
    console.log("cut");
    alert(" you can't cut ") 
  }

  const onPaste =()=>{
    console.log("paste");
    alert(" you can't paste ") 
  }

    return (
    <div   >
     <div onCopy={onCopy} >  
     <h1>On Copy</h1>
     lorem100Labore excepteur esse magna
      sunt ad. Duis nostrud
       ullamco anim occaecat
         quis adipisicing. Irure pariatur pariatur veniam do Lorem commodo exercitation mollit exercitation mollit irure dolore dolor.
         lorem100Labore excepteur esse magna
      
     </div>



     <div onCut={onCut} >  
     <h1>On Cut</h1>
     lorem100Labore excepteur esse magna
      sunt ad. Duis nostrud
       ullamco anim occaecat
         quis adipisicing. Irure pariatur pariatur veniam do Lorem commodo exercitation mollit exercitation mollit irure dolore dolor.
         lorem100Labore excepteur esse magna
      
     </div>


     <div onPaste={onPaste} >  
     <h1>On Paste </h1>
        <textarea>
        
         </textarea>
      
     </div>




    </div>
  );
}
