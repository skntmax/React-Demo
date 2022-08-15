import React, { Component } from 'react';

export default class HomePage extends Component {

    constructor(props){
         super(props)
         this.state={
             show:false
             ,
             data :undefined
         }
    }


    componentDidUpdate(prevProps, prevState, snapshot){

         console.log("prev state" , prevState.show)
         console.log("current" , this.state.show)


    }
     

    shouldComponentUpdate(prevProps, prevState, snapshot){


        return false 
    }
     

    
     
  render() {
    return (
      <div>
       
       
        
       {this.state.show==true? <h1 className="my-2"> laxman prasad </h1> :" " } 
       <button className="btn btn-sm btn-primary" onClick={ ()=> this.setState({show:!this.state.show})  }> show me  </button> 
      </div>
    );
  }

  componentDidMount(){
     

   
     
     
     
  }

}
