import { useState } from 'react'

const Button = ({value, onClick})=>(<button onClick={onClick}>{value}</button>)

const Statistics = ({good, neutral, bad}) => {

  if (good===0 && neutral===0 && bad===0) return (<p>No feedback given</p>)

  const all = good + neutral + bad;
  const average = (good-bad)/all || 0
  const positive = good/all || 0;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={(positive*100)+"%"}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value})=>(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)



const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} value="good"/>
      <Button onClick={()=>setNeutral(neutral+1)} value="neutral"/>
      <Button onClick={()=>setBad(bad+1)} value="bad"/>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default App
