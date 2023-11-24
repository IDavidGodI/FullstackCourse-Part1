
const Header = (props)=>{
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props)=>{
  return(
    <>
      <p>
        {props.info[0].part} {props.info[0].exercises}
      </p>
      <p>
        {props.info[1].part} {props.info[1].exercises}
      </p>
      <p>
        {props.info[2].part} {props.info[2].exercises}
      </p>
    </>
  )
}

const Total = (props)=>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const info =[
    {part: 'Fundamentals of React',    exercises: 10},
    {part: 'Using props to pass data', exercises: 7 },
    {part: 'State of a component',     exercises: 14 }
  ]
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content info={info}/>
      <Total total = {info[0].exercises+info[1].exercises+info[2].exercises}/>
    </div>
  )
}

export default App
