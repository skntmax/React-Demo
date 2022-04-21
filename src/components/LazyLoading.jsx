import React ,{ lazy , Suspense } from 'react'
// import LazyComponent from './LazyComponent'
import {Spinner} from 'react-bootstrap'
const OtherComponent = React.lazy( () => import('./../components/LazyComponent') );

export default function LazyLoading() {
  return (
    <div>
     
     <Suspense fallback={<div >
         <Spinner animation="border" role="status">
          <span className="visually-hidden" >Loading...</span>
        </Spinner>
     </div>}
      >

        <OtherComponent />

      </Suspense>
     
    </div>
  )
}
