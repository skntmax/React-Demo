import React, { useEffect } from 'react'
import { useState } from 'react'


function TypeWriter() {
 
    const [p, setP] = useState(`
    Dear Resources Valley, 

I am writing to apply for the position of PHP Developer Trainee at your esteemed organization. With 1 years of experience in PHP development and related technologies, I am confident that I am the right fit for this position.

I am a B.Tech/B.E. in Law with 2 years of experience in the domain. I have a strong background in PHP, Laravel, Coordinator, Core PHP, MongoDB, and Backend Operations. I am passionate about programming and am always looking for ways to improve my skills and stay up-to-date with the latest technologies.

Not only am I highly skilled in the technical aspects of the role, but I also possess strong interpersonal skills. I am a great team player and am able to effectively communicate with colleagues and clients alike. My organizational and problem solving skills have allowed me to excel in my role as a PHP Developer.

I am confident that I have the necessary skills and experience to make an immediate impact at Resources Valley. I look forward to discussing this position in more detail and would be delighted to have the opportunity to join your team.

Sincerely, 
Shashikant
    `)

    const [s, setS] = useState('')

    const generate = (str, size)=>{

            const numChunks = Math.ceil(str.length / size)
            const chunks = new Array(numChunks)
          
            for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
                    setTimeout(()=>{
                        chunks[i] = str.substr(o, size)
                        setS(prev=> prev+chunks[i]  )
                    } , 2000 )
                            
    
                }
          
            return chunks   
    }

    useEffect(()=>{
         
    } , [])
     
    return (
    <div>
     <button onClick={()=>{

         generate(p , 1 )
         
     }}  > genrate </button>
    TypeWriter
     {s}
    </div>
  )
}

export default TypeWriter
