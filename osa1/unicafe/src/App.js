import { useState } from 'react'
import Header from './Header'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header text='Give feedback'/>
      <Button handleClick={setToGood} text='Good'/>
      <Button handleClick={setToNeutral} text='Neutral'/>
      <Button handleClick={setToBad} text='Bad'/>
     
      <Header text='Statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      
    </div>
  )
}

export default App;

