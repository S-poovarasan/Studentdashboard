import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


  



function App() {
  const [name,setName]=useState("");
  const [mode,setMode]=useState(false);


  return (
    <div className={mode?"container dark":"container"}>
    <h1>Welcome to Students dashboard</h1>
    <input
     type='text' 
     placeholder='Enter your name' 
     className='nameinput' 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      ></input>
    <p >Hello,{name} </p>
    <button className='toggle' onClick={()=>setMode(!mode)}>
      {mode?"Switch to Light Mode":"Switch to Dark Mode"}
    
    </button>
    </div>
  );
}

export default App;
