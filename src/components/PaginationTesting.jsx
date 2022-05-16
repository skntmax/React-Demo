import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'


export default class PaginationTesting extends Component {

 constructor(props)
    {
      super(props)
       this.state = {
            active:2,
            items:[]
       }

    for (let number = 1; number <= 5; number++) {
        this.state.items.push(
            <Pagination.Item key={number} active={ number === this.state.active }   >
             {number}
            </Pagination.Item>,
             );
      }  
}

    paginationBasic = ()=> {
        return (
          <div>
          <Pagination  > {this.state.items}</Pagination>
        </div>  
        ) } 
     
  render() {
    return (
         
      <div> {this.paginationBasic()} </div>
    )

}
   
}

 
