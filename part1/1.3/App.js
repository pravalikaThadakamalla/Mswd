import React from 'react'

const App = () => {
  const course = 'Mearn Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 9
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 12
  }
  const part3 = {
    name: 'State of a component',
    exercises: 13
  }
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}
export default App
