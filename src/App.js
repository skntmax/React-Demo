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
import UseReducer from './components/UseReducer';
 
export const UserContext = createContext()

function App() {
  //  const userContext = useContext(null)
  const [user, setUser] = useState(" IMAGE URL");
  return (
    <div className="parentDiv">
     
        { /* <SwitchButton />  */ }
       { /* <CustomizedSelects /> */ }         
       { /* <Accordian /> */ }
       { /* <Backdropcmp />  */ } 
        
      { /* <Skeletoncmp />  */}
        
       { /* <FileUpload />  */}  
          
       <UseReducer /> 
   
    </div>
  );
}

export default App;
