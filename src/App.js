import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appoitment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Parents Meeting',
        day: 'Feb 6th at 6:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Playing Cricket',
        day: 'Feb 6th at 8pm',
        reminder: false
    }
])

// Delete Task
const deleteTask = (id) => {
   console.log('deleted', id)
}

  return (
  <div className="container">
    <Header title='Task Tracker'/>
    <Tasks tasks={tasks} onDelete={deleteTask}/>
  </div>
  )
}

// class App extends React.Component {
//   render(){
//     return (
//       <h1>Hello from class component</h1>
//     )
//   }
// }

export default App;
