import React ,{lazy, Suspense} from 'react'
// import LazyComponent from './LazyComponent'
const OtherComponent = React.lazy( () => import('./../components/LazyComponent') );

export default function LazyLoading() {
  return (
    <div>
     
     <Suspense fallback={<div >  <h1>  Loading...</h1></div>}    >

        <OtherComponent />

      </Suspense>
     
    </div>
  )
}
