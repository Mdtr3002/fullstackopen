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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
        <Header course={course}/>
        <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
        <Footer  exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      </div>
    )
  }
export default App;
