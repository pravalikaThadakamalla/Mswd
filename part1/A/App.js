import React from 'react'

const App = () => {
  const course = '  EVENT MANAGEMENT SYSTEM'
  const part1 = 'NO OF USERS REGISTERED'
  const exercises1 = 10
  const part2 = 'NO OF EVENTS '
  const exercises2 = 7
  const part3 = 'NO OF PARTICIPARTION TO THE EVENTS'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App


