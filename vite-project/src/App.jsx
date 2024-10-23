import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todo,setTodo]=useState([])

  const onChangeHandler=(e)=>{
  setTodo(e.target.value)
  }

  const onClickHandler=()=>{
    alert("hii")
    
      setTodo([...todo])
      
    
  }
 


  return (
    <>
    <input type="text" value={todo} onChange={onChangeHandler}></input>
    <button onClick={onClickHandler}>Create</button>
    <ul >
    {todo.map((tod)=>(
      <li>{tod}</li>
    ))}
    </ul>
    </>
  )
}

export default App
