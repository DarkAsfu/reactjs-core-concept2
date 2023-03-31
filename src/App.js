import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(1);
  const incraseCount = ()=>{
    setCount(count+1);
  }
  const decreaseCount = () => setCount(count-1);
  
  // const incraseCount = ()=>{
  //   const newCount = count+1;
  //   setCount(newCount);
  // } 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incraseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;
