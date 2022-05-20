import * as React from 'react';
import axios from 'axios';
import './../src/assets/style.css'
// import Header from '../org_onboarding/org_header';
// import {getProuct ,selectedProduct } from './../action/OnboardingAction'
// import { Link } from 'react-router-dom';
// import constant from '../constant';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Selectproduct extends React.Component {
   constructor(props){
       super(props)
      this.state={
           pid:undefined, 
      }
 }

 componentDidMount(){
       
    // getProuct().then((res: any) => {
    //          console.log(res);
  
    //    this.setState({
    //         pid:res.result
    //    })
        
    // }).catch((err: any) => {
    //     alert(err);
    // })
      
 }

 sendPID =()=>{
   console.log("hi");
   

 }


    render() {
         
         
         
        const sendProductId = this 
        return (
            <React.Fragment>
                {console.log(this.state.pid)}
                <div className='content' >
                    {/* <Header /> */}
                    <h5>Select Product</h5>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="p-2">Hrms</div>
                        <div className="p-2">Onboarding</div>
                        <div className="p-2">Select product</div>
                    </div>
                    <div className='Main-div main_container'>
                        
                 
                       <div className="chilDiv"> 
                        
                                    <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                                     {/* <div className=''> */}
                                     <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                                     <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                                     <div className='text-primary ml-2'>
                                      <p>try now</p>
                                      </div> 
                                     </button>
                      </div>




                      <div className="chilDiv" >  
                      
                                  <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                                   {/* <div className=''> */}
                                   <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                                   <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                                   <div className='text-primary ml-2'>
                                    <p>try now</p>
                                    </div> 
                                   </button>
                    </div>

                    <div className="chilDiv" > 
                    
                                <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                                 {/* <div className=''> */}
                                 <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                                 <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                                 <div className='text-primary ml-2'>
                                  <p>try now</p>
                                  </div> 
                                 </button>
                  </div>





                  <div className="chilDiv" > 
                  
                              <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                               {/* <div className=''> */}
                               <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                               <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                               <div className='text-primary ml-2'>
                                <p>try now</p>
                                </div> 
                               </button>
                </div>






                <div className="chilDiv" > 
                
                            <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                             {/* <div className=''> */}
                             <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                             <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                             <div className='text-primary ml-2'>
                              <p>try now</p>
                              </div> 
                             </button>
              </div>

              <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>



            <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>




            <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>




            <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>




            <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>



            <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>



            <div className="chilDiv" > 
              
                          <button className='Center-div' onClick={e=>sendProductId.sendPID}  >
                           {/* <div className=''> */}
                           <h5 className='text-black mr-6 pt-4 fs-0 '> <i className='fas fa-link mr-4'/> HRMS</h5>
                           <p className='text-black ml-3 pt-1 fw-0 font-weight-bold'>A Complete HRMS Application to Drive your Organization</p>
                           <div className='text-primary ml-2'>
                            <p>try now</p>
                            </div> 
                           </button>
            </div>


            

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Selectproduct;