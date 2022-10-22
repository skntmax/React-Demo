import React ,{createContext ,useState} from 'react'
import './App.css';
import './custom.css';
import './asssets/style.css'
import SwitchButton from './components/Switch';
import CustomizedSelects from './components/CustomizedSelects'
import Accordian from './components/Accordian';
import Backdropcmp from './components/Backdropcmp';
import Skeletoncmp from './components/Skeleton';
import FileUpload from './components/FileUpload';
import ComponentA from './components/ComponentA';
import LazyLoading from './components/LazyLoading';
import PrivateRouter from './PrivateRouter';


 import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToolTip  from  './components/Tooltip';
import PaginationTesting from './components/PaginationTesting';


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
          
     { /*
         <UserContext.Provider value={user} >
        <ComponentA user2={user}  />
     </UserContext.Provider>

       */}     

     {   /*
       <Switch>
        <Route  exact={true}  path="/tooltip" component= {<Tooltip />}  />
      </Switch>   */} 

       {  /*  <LazyLoading />  */}


        { /* <ToolTip />  */ }

           { /* <PaginationTesting />  */} 
          

              
              <BrowserRouter>
             
          <ul class="list-group">
          <li class="list-group-item "> <a   href="/captcha"  >Captcha</a> </li>
          <li class="list-group-item"> <a   href="/payslip"  >Payslip</a> </li>
          <li class="list-group-item">       <a   href="/googleAuth"  >Google Auth </a>  </li>
          <li class="list-group-item">      <a   href="/cart" > Cart </a>  </li>
          <li class="list-group-item">     <a   href="/razorpay"  > Razor Pay </a></li>
          <li class="list-group-item">         <a   href="/useContext"  >use COntext  </a> </li>
          <li class="list-group-item">  <a   href="/make-pdf"  >Make PDF</a> </li>
          <li class="list-group-item">  <a   href="/cart-System"  >Cart System</a> </li>
          <li class="list-group-item">          <a   href="/pdf"   > PPDF </a>  </li>
          
        </ul>



                
               </BrowserRouter>
       
           <BrowserRouter>
                 <PrivateRouter />
           </BrowserRouter>
  


    </div>
  );
}

export default App;
