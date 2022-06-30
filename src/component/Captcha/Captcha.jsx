import React, { Component } from 'react';
import { load } from 'recaptcha-v3'
import ReCAPTCHA from 'react-google-recaptcha'
export default class Captcha extends Component {
     constructor(){
        super();
        this.state= {
             siteKey :'6LeY_7EgAAAAAD-Q0jtzzCtEiEAuAyD1TIXVlJfA',
             secretKey :'6LeY_7EgAAAAAK2xAxXCxyXdgWeSQz_O-nwOUup4',       
             varified:false
            
            } 

             this.onChange = this.onChange.bind(this)

     }        


     onSubmit(){
          alert("submitted ");         
     }
    
     componentDidMount(){
        const { siteKey , secretKey } = this.state
         
        load(siteKey, {
            useRecaptchaNet: true,
            autoHideBadge: true
          }).then((recaptcha) => {
            recaptcha.execute(secretKey).then((token) => {
                console.log("token" , token ) // Will print the token
              })
          })
                
            }

            onChange(value) {
                console.log("value " , value);
                this.setState({varified:true})
            }
            
    render() {
        const { siteKey , secretKey  } = this.state

    return (
      <div>
       
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      { <ReCAPTCHA
      sitekey={siteKey}
      onChange={this.onChange}
    /> }

     <button disabled={!this.state.varified} onClick={this.onSubmit} className="btn btn-sm btn-primary">  Submit </button>  

      </div>
    );
  }
}
