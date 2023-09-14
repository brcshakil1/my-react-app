import { useState } from 'react';
import './App.css'
import Home from './Components/Home/Home';
import MyButton from './Components/MyButton/MyButton';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Home></Home>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </>
  )
}

export default App
