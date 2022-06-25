import React from "react";

 class Bind extends React.Component {
     
    constructor(props) {
      super(props);
      this.name = "shashi kant "
       this.state = {
         count:0
       }
        
      this.handleClick = this.handleClick.bind(this) ;  
    }
     
    handleClick(e) {
      console.log('this is ' ,  this.state.count );
       this.setState({count:this.state.count+1} , ()=>{
         console.log(" count increased >>> " , this.state.count);         
       })
    }

    render() {
return (
  <React.Fragment>
  <button onClick={this.handleClick} >Click Me</button>       
   </React.Fragment>

)


    }
  }



class Two extends React.Component {
  
  constructor(){
     super()
  }


  render(){
     
    return (
        <h1>
           second class 
         </h1>
    )
  }

}

export default Bind 
export {Two}