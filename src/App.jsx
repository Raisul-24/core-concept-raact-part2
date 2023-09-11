import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert("Button Clicked");
  }
  const handleClick2= () =>{
    alert("Button 2 Clicked");
  }
  const addToFive = (num) =>{
    alert(num+5);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click-2</button>
      <button onClick={() => {alert('Button 3 Clicked')}}>Click-3</button>
      <button onClick={() => addToFive(4)}>Click-4</button>
    </>
  )
}

export default App
