import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greetings app created by 
      <a href="https://github.com/GandhiMateGandhi"> GandhiMateGandhi</a>
    </div>
  )
}
const App = () => {
// const name = 'Peter Pan'
const age = '16'

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={age} />
      <Footer />     
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

