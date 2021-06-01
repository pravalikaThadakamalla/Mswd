
import React from 'react'

const App = () => {
  const course = 'Mearn Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header Course={course} />
      <Content p1={part1} p2={part2} p3={part3} s1={exercises1} s2={exercises2} s3={exercises3} />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>  )
}
const Header=prop=>{
  return(
    <div>
      <h1>{prop.Course}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      <Part P={props.p1} E={props.s1}/>
     <Part P={props.p2} E={props.s2}/>
     <Part P={props.p3} E={props.s3}/>
    </div>
  )
}
const Total=prop=>{
  return(
    <div>
      <p>No:Of:Exercises:{prop.total}</p>
    </div>
  )
}
const Part=prop=>{
  return(
    <p>{prop.P} {prop.E}</p>
  )
}
export default App


