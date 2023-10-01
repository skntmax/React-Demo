import React, { useEffect , useState  } from 'react'
import allcities from './../allcities'
import graph_global from './../actions/graphactions'
import go from 'gojs'
function Graph() {
    

     const { nodes} = graph_global
      let myDiagram


            let all_stations =nodes.map(ele=> {
                return { key: ele, color: `${random_rgba()}` }
            }) 


        
    const [Data, setData] = useState({
         nodes:{},
         stations:{},
         connection:{
            s1:"",
            s2:""
         },

         joined_stations:[]
    })

    
    
    const [cities, setCities] = useState(allcities)


    
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    
    useEffect(()=>{
         myDiagram = new go.Diagram("myDiagramDiv",
            { // enable Ctrl-Z to undo and Ctrl-Y to redo
            "undoManager.isEnabled": true
            });

            myDiagram.nodeTemplate =
             
  new go.Node("Auto")  // the Shape will automatically surround the TextBlock
    // add a Shape and a TextBlock to this "Auto" Panel
    .add(new go.Shape("RoundedRectangle",
        { strokeWidth: 0, fill: "white" })  // no border; default fill is white
        .bind("fill", "color"))  // Shape.fill is bound to Node.data.color
    .add(new go.TextBlock({ margin: 8, stroke: "#333" })  // some room around the text
        .bind("text", "key"));  // TextBlock.text is bound to Node.data.key

            myDiagram.model = new go.GraphLinksModel(
                all_stations,
                Data.joined_stations
                );
                
    } , [Data.joined_stations.length] )



    const onChangeHandler=(e, s )=>{

         setData({
             ...Data ,connection:{
                 ...Data.connection ,[s]:e.target.value  
             } 
         })

    }
     

    const addStation = (e)=>{

            e.preventDefault()
        
        const { connection:{s1,  s2 }} = Data
         if(s1!="" && s2!="" && s1!=s2 ){
            graph_global.addSubstations(s1 , s2 )
            
            setData({...Data ,nodes:graph_global.nodes , stations:graph_global.stations  })
            
              
          }else {
             alert("either fill diffrent cities or fill both the fields ")
          }
      
    } 
    
    return (<div>
         
        <div class="container text-center">

        <div class="row">
        <div class="col-8">
                    <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Station" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

        </div>
     

        <div class="col-4">
        <button className='btn btn-primary' type="submit" onClick={addStation}> Add station </button>
       </div>

      </div>


        <div class="row">
            <div class="col">
                <Cities cities={cities} onChangeHandler={onChangeHandler} s="s1"/>
            </div>
            <div class="col">
            <Cities cities={cities} onChangeHandler={onChangeHandler} s="s2"/>

    </div>
    <div class="col">
     <button className='btn btn-primary' type="submit" onClick={addStation}> join station </button>
    </div>
  </div>
</div>
  
 
<div className='my-2 ' id="myDiagramDiv"
     style={{width:"100vw", height:"100vh", backgroundColor: "#DAE4E4"}}>
</div>



    </div>
  )
}


const Cities =({cities , onChangeHandler , s })=>{
     
    return <React.Fragment>

     <select class="form-select" aria-label="Default select example"  onChange={(e)=> onChangeHandler(e , s )}>
             {cities && cities.map((ele)=>{
                 return  <option  value={ele}>{ele}</option>
             })}
   </select>
     </React.Fragment>
}


export default Graph
