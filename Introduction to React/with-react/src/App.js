import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { useState } from 'react';
function App() {
  const [value,setvalue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText="Hlo guys how are you? "/>
      <div className='value'>{value}</div>
      <button onClick={()=>{
        {setvalue(value+1)}
      }}>click me</button>
      <Footer/>
    </div>
    
  );
}

export default App;
