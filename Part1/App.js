import logo from './logo.svg';
import './App.css';

const Header = (headerprop) => {
  return(
    <h1>{headerprop.course}</h1>
  )
  }
  
  const Part = (partprop) => {
    return (
      <p>{partprop.part} {partprop.exercises}</p>
    )
  }
  const Content = (contentprop) => {
  return(
    <>
    <Part part={contentprop.part1} exercises={contentprop.exercises1} />
    <Part part={contentprop.part2} exercises={contentprop.exercises2} />
    <Part part={contentprop.part3} exercises={contentprop.exercises3} />
    </>
  )
  }
  
  const Footer = (footerprop) => {
    return(
      <>
      <p>Number of exercises {footerprop.exercises1 + footerprop.exercises2 + footerprop.exercises3}</p>
      </>
    )
  }
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course={course}/>
        <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        <Footer  exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      </div>
    )
  }
export default App;
