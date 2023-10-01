import allcitiesdata from '../allcities'

class graph  {

    constructor(nodes) {
      this.nodes = [...nodes]
      this.stations = { } 
      }

      addSubstations( s, d ) {
            if(Object.keys(this.stations).length==0) {
                for(let val of this.nodes ) {
                    this.stations[val] = []
                  }
            }
          
        for(let nodes in this.stations) {
           if( nodes==s && !this.stations[nodes].includes(d) ) { 
              this.stations[s] = [...this.stations[nodes] , d ]
            } 
        }
         
         return this.stations
         
     }

     addStation(station) {
      this.nodes.push(station)
    }



     removeStations(station) {

     for(let st in this.stations) {
          
          if(this.stations[st].includes(station)) {
             this.stations[st] = this.stations[st].filter(ele=> ele!= station )
          }
          delete this.stations[station]
        }
    return this.stations 
    }
      

     
 } 

//  let trainA =new graph ( [ "A" , "B" , "C" , "D" , "E" ]  )
 

//  trainA.addSubstations("A" , "B" )
//  trainA.addSubstations("A" , "C" )
//  trainA.addSubstations("C" , "A" )
//  trainA.addSubstations("B" , "D" )
//  trainA.addSubstations("B" , "A" )
//  trainA.addSubstations("D" , "B" )
//  trainA.addSubstations("D" , "C" )
//  trainA.addSubstations("E" , "A" )
//  trainA.addSubstations("E" , "D" )
//  trainA.addSubstations("A" , "E" )
  

//  trainA.removeStations('C')

let gr_o = new graph(allcitiesdata)

export default gr_o


  
//   console.log("trainA>>>" , trainA); 