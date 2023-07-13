import React ,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
function Calender() {
    const [value , setValue ] = useState(new Date());
    const [ data , setData ] = useState({
    meetings: {name:"meetings" , value:"" ,error:false  , options:[]},    
    from :{name:"from" , value:"" , error:false , options:[] } ,
    to :{name:"to" , value:"" , error : false , options:[]  }
     });
    
     const onChangeValue = (value)=>{
     
        let da = new Date(value)   
      
     setData({
        ...data  ,['meetings']:{...data['meetings'] , value: da }
       })

    }

   const onChange = (e)=>{
   let {name , value }  = e.target
   setData({
    ...data  ,[name]:{...data[name] , value :e.target.value }
   })

 }






 function getTimeDiff(start, end) {
  
    const [startHour, startMins] = start.split(":");
    const [endHour, endMins] = end.split(":");
    const diffHour = endHour - startHour;
    const diffMins = endMins - startMins;
  
    const isSameHour = diffHour === 0;
    if (isSameHour) return endMins - startMins;
  
    const diffHourIntoMins = diffHour * 60;
    let totalTimeHr =(diffHourIntoMins+diffMins)/60 
    let totalMin = (diffHourIntoMins + diffMins)%60

    return  totalTimeHr +":"+totalMin;
}
  

 console.log('====================================');
 console.log(getTimeDiff(data.from.value , data.to.value ));
 console.log('====================================');

  
 return  (
    <React.Fragment>
  <div style={{
     display:"flex" ,
     justifyContent:"center",
     alignItems:"center",
     height:"100vh",
  }}>
  
   <div 
    style={{
        
     display:"flex" ,
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center",
     height:"100vh",
  }}
   >
    
   <Calendar onChange={onChangeValue} name={data.meetings.name} value={data.meetings.value} />  
    <div>
    
    <div>
    <span> from <input  onChange={onChange}  type="time" name={data.from.name}  value={data.from.value} />  </span>
    </div>  
    <div>
    <span> to  <input type="time" onChange={onChange}  name={data.to.name} value={data.to.value}  />  </span>
     </div>  
    </div>

     <button  type="submit" > schedule meeting  </button>


   </div>
  </div>
    
    </React.Fragment>
  )
}

export default Calender