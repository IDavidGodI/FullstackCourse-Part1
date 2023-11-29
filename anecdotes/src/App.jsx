import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(-1)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const setRandom = ()=>{
    const random = Math.random() * (anecdotes.length-1);
    setSelected(Math.round(random))
  }

  const addVote = ()=>{
    const newPoints = [...points]
    newPoints[selected]++;

    setPoints(newPoints)
  }
  if (selected===-1)
    return (
      <div>
        <p>
          <b>Press the button to display a random anecdote</b>
        </p>
        <button onClick={setRandom}>select random</button>
      </div>
    )
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      {" "}
      <button onClick={setRandom}>next anecdote</button>
    </div>
  )
}

export default App
