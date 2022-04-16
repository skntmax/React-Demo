import React from 'react'
import { Skeleton } from '@mui/material'
export default function Skeletoncmp() {
  return (
    <React.Fragment>
      
    <div>
    <Skeleton variant="text" />
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={118} />
     </div>


     <div>
     
     <Skeleton />
<Skeleton animation="wave" />
<Skeleton animation={false} />
     </div>

    
     </React.Fragment>
  )
}
