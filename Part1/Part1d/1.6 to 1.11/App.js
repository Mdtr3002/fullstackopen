import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
const Button = (props) => 
<button onClick={props.update}>{props.text}</button>
const Statistics = (props) =>
<><td>{props.title}</td> <td>{props.value}</td></>
const StatisticsLine = (props) => {
  return(
  <tbody>
    <tr><Statistics title={"good"} value={props.arr[0]} /></tr>
    <tr><Statistics title={"neutral"} value={props.arr[1]} /></tr>
    <tr><Statistics title={"bad"} value={props.arr[2]} /></tr>
    <tr><Statistics title={"all"} value={props.arr[3]} /></tr>
    <tr><Statistics title={"average"} value={props.arr[4]} /></tr>
    <tr><Statistics title={"positive"} value={props.arr[5]} /><td>%</td></tr>
  </tbody>)
}
const MyBtn = (props) => {
  return (
    <>
    <Button update={props.good} text={"good"} />
    <Button update={props.neutral} text={"neutral"} />
    <Button update={props.bad} text={"bad"} />
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good+neutral+bad
  const goodFeedback = () => setGood(good+1)
  const neutralFeedback = () => setNeutral(neutral+1)
  const badFeedback = () => setBad(bad+1)
  const myArr = [good,neutral,bad,total,(good-bad)/total,(good/total)*100]
  if(good == 0 && bad == 0 && neutral == 0){
    return (
      <div>
      <h1>give feedback</h1>
      <MyBtn good={goodFeedback} neutral={neutralFeedback} bad={badFeedback} />
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }
  else{
  return (
    <div>
      <h1>give feedback</h1>
      <MyBtn good={goodFeedback} neutral={neutralFeedback} bad={badFeedback} />
      <h1>statistics</h1>
      <StatisticsLine arr={myArr} />
    </div>
  )}
}
export default App;
