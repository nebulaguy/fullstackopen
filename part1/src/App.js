const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 

  return (
    <div>
      <Header name={course.name} />
      <Content p1={course.parts[0]} p2={course.parts[1]} p3={course.parts[2]}/>
      <Total value={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (coursename) => {
  console.log(coursename) 
  return (
    <div> 
      <h1> {coursename.name} </h1>
    </div>
  )
}

const Content = (content) => {
  console.log(content) 
  return (
    <div>
      <Part partname={content.p1.name} partex={content.p1.exercises}/>
      <Part partname={content.p2.name} partex={content.p2.exercises}/>
      <Part partname={content.p3.name} partex={content.p3.exercises}/>
    </div>
  )
}

const Part = (part) => {
  return (
  <div>
    <p>{part.partname} {part.partex}</p>
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