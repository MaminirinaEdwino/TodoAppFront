import { useEffect, useState } from 'react'
import TaskList from './TaskList'
import './asset/ouptut.css'
import NewTask from './newTask'

function App() {
  document.title = 'TodoApp'
  const [task, setTask] = useState([])

  const recupTask =async () => {
    await fetch('http://127.0.0.1:8000/api/tasks')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setTask(response['hydra:member'])
    })
  }
  
  const addNewTask = async (e) => {
        e.preventDefault()
        let form = new FormData(e.target)
        let body = {
            "name": form.get('taskName'),
            "description": form.get('taskDescription'),
            "state": false
        }
        if (body.name != '' && body.description!='') {
          await fetch("http://127.0.0.1:8000/api/tasks", {
            method: "POST",
            headers: {
              "content-type": "application/ld+json",
            },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            });
          document.getElementById("taskName").value = "";
          document.getElementById("taskDescription").value = "";
          recupTask();
        }
  }
  
  useEffect(() => {
    recupTask()
  }, [])
  
  return (
    <>
      <h1>TaskList</h1>
      <NewTask addNewTask={addNewTask}/>
      <TaskList task={task} setTask={setTask}/>
    </>
  )
}

export default App
