import { FunctionComponent } from 'react'
import { ITask } from './Interface'
import './TodoList.css'

interface ITodoProps {
 todo:ITask
 todoList: ITask[]
 setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
 compiledList: ITask[]
 setCompiledList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Todo:FunctionComponent<ITodoProps> = (props) => {
  const {todo,todoList,setTodoList,compiledList,setCompiledList} = props;
  
  const DeleteTask = (id : number) => {
    setTodoList(todoList.filter((_, i) => i !== id - 1)) // the selected task has been deleted from the list
  }

  const AddCompiled = (id:number, task: string) => {
    setTodoList(todoList.filter((_, i) => i !== id - 1))
      const CompiledTask = {
       id,
       task
      }
      setCompiledList([...compiledList,CompiledTask]) // the selected task has been added to the list
      
  }
  return (
    <div key = {todo.id}>
      <ul className="list-group">
        <li key = {todo.id} className="list-group-item" >
          {todo.task}
         <div style={{float:"right"}}>
          <button className="btn btn-danger" onClick={() => DeleteTask(todo.id)}>Delete</button>
          <button className="btn btn-success" style={{marginLeft:"5px"}} onClick={() => AddCompiled(todo.id,todo.task)}>Compiled</button>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default Todo
