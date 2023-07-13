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
      <Header name={course} />
      <Content name={part1} value={exercises1} />
      <Content name={part2} value={exercises2}/>
      <Content name={part3} value={exercises3} />
      <Total value={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (course) => {
  console.log(course) 
  return (
    <div> 
      <h1> {course.name} </h1>
    </div>
  )
}

const Content = (content) => {
  console.log(content) 
  return (
    <div>
      <p> {content.name} {content.value}</p>
    </div>
  )
}

const Total = (total) => {
  console.log(total)
  return (
    <div>
      <p>Number of exercises {total.value}</p>
    </div>
  )
}




export default App