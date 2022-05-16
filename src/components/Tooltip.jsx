import React from "react";
import { OverlayTrigger ,Tooltip ,Button ,  } from "react-bootstrap";


export default class ToolTip extends React.Component {
  
      constructor(props){
         super(props)  
      }
  

      renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} >
          Simple tooltip
        </Tooltip>
      );
   
            render(props) {
    return (
        <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={this.renderTooltip(props)}
         >
          
         <Button variant="success"> Hover me to see </Button> 
          
         </OverlayTrigger>
         
          )
  }
}

 
 

  
  