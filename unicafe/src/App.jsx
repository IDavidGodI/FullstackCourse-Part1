import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  if (good===0 && neutral===0 && bad===0) return (<p>No feedback given</p>)

  const total = good + neutral + bad;
  const average = (good-bad)/total || 0
  const positive_percentage = good/total || 0;

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {100*positive_percentage}%</p>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App
