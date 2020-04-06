import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
  id: 1,
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 14,
      id: 4
    }
  ]
}

const Course = () => {

const Header = () => <h1>{course.name}</h1>

const Content = () => {
  return (
      <Part />
    )
  } 

const Part = () => {
  return (
    <div>
      {course.parts.map(part => 
        <p key = {part.id}>
          {part.name} {part.exercises}
        </p>
      )}
    </div>
  )
}

  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
    </div>
  )
}

  return(
    <div>
      <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))