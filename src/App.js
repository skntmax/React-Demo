import React ,{createContext ,useState} from 'react'
import './App.css';
import './asssets/style.css'
import SwitchButton from './components/Switch';
import CustomizedSelects from './components/CustomizedSelects'
import Accordian from './components/Accordian';
import Backdropcmp from './components/Backdropcmp';
import Skeletoncmp from './components/Skeleton';
import FileUpload from './components/FileUpload';
import ComponentA from './components/ComponentA';
import LazyLoading from './components/LazyLoading';
import ChildCompo from './components/ChildCompo';
import FormElements from './components/FormElements';
export const UserContext = createContext()

function App() {
  //  const userContext = useContext(null)
  const [user, setUser] = useState(" IMAGE URL");
 let prentState = 0   
   const getName = (name)=>{
      
       console.log("name from child component " , `'${name}' ` , '_______ ' ,prentState );
     
     return name
       
   }

   
  return (
    <div className="parentDiv">
     
        { /* <SwitchButton />  */ }
       { /* <CustomizedSelects /> */ }         
       { /* <Accordian /> */ }
       { /* <Backdropcmp />  */ } 
        
      { /* <Skeletoncmp />  */}
        
       { /* <FileUpload />  */}  
          
     { /*   <UserContext.Provider value={user} >
        <ComponentA user2={user}  />
     </UserContext.Provider>  */}     

       { /* <LazyLoading />  */ }

      { /*  <ChildCompo getName={getName} />    */ }
       

       <FormElements />
        
    </div>
  );
}

export default App;
