import React from 'react';
import './App.css';


function App() {
  const [count , setCount] = React.useState(0)
  
  const increment = () =>{
    setCount(count + 1)
  }
  const decrement = () =>{
    setCount(count - 1)
    if(count <= 0){
      setCount(count)
    }
  }
  return (
    <div className="App">
      <div>
        <h3>Счетчик:</h3>
      </div>
      <h1>{count}</h1>
      <div className="co">
        <button onClick={decrement} className='minus'>- Минус</button>
        <button onClick={increment} className='plus'>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
