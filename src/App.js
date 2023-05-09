import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';

function App() {

  let initialTask = JSON.parse(localStorage.getItem('tasks'));
  if(!initialTask) {
    initialTask = [];
  }

  const [listTasks, setListTasks] = useState(initialTask);
  useEffect(() => {
    if(initialTask) {
      localStorage.setItem('tasks', JSON.stringify(listTasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }, [initialTask, listTasks])
  

  const createTask = (task) => {
    setListTasks([...listTasks, task])
  }

  const deleteTask = (id) => {
    const currentTask = listTasks.filter((task) => task.idTask !== id);
    setListTasks(currentTask);
  };


  return (
    <div>
      <Container>
        <Header/>
        <InputTask createTask={createTask}/>
        <TaskContent tasks={listTasks} deleteTask={deleteTask}/>
      </Container>
    </div>
  );
}

export default App;
