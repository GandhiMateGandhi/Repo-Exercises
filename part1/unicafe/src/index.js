import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const Statisctics = (props) => (
  <p>{props.text} {props.value}</p>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const feedback = (props) => {
    if (props.all == 0) {
      return (
        <div>
          <p>no feedback given</p>
        </div>
      )
    }
    return (
      <div>
        <Statisctics text="good" value={good} />
        <Statisctics text="neutral" value={neutral} />
        <Statisctics text="bad" value={bad} />
        <Statisctics text="all" value={all} />
        <Statisctics text="average" value={(good - bad) / all} />
        <Statisctics text="positive" value={good / all} />
      </div>
    )
  }

return (
  <div>
    <h1>give feedback</h1>
    <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button>

    <h2>statistics</h2>
    {feedback(all)}
  </div>
)
}


ReactDOM.render(<App />,
  document.getElementById('root')
);
