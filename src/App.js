import logo from './logo.svg';
import { useEffect } from 'react';
import Main from './component/Main';
import Todo from './component/Todo';

function App() {

  useEffect(()=>{
  console.log(" parent component ");
  } )  
   
  return (  

   <div className="App" id="back" >
  <Main />
   <Todo />
    </div>
      
  );
}

export default App;
