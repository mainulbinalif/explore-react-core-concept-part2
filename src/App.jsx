import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  const handleClick =()=> {
  alert('button clicked')
  }

  return (
    <>
      
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      
    </>
  )
}

export default App
