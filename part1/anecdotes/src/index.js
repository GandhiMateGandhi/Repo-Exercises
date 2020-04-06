import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/* const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(0)

  const points = new Array(anectodes.length + 1).join('0').split('').map(parseFloat)
  
  const copy = [...points]
  copy[2] += 1

  console.log(copy)
  return (
    <div>
      <p>{props.anectodes[selected]}</p>
      <button onClick={() => setVoted(voted + 1)}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anectodes.length))} >show another!</button>
    </div>
  )
} */

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState([0,0,0,0,0,0])

  function vote() {
    setVoted(voted.map((value, index) => {
      if(index == selected){
        return value + 1
      }
      return value;
    }))
  }
  
  return (
    <div>
      <p>{props.anectodes[selected]}</p>
      <p>{voted[selected]}</p>
      <button onClick={() => vote()}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anectodes.length))} >show another!</button>
    </div>
  )
}

const anectodes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anectodes={anectodes} />,
  document.getElementById('root')
);
