import { useState, ChangeEvent, FunctionComponent } from 'react'
import { ITask } from './Interface'
import './TodoList.css'

interface ITodoFormProps {
  todoList: ITask[]
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TodoForm: FunctionComponent<ITodoFormProps> = (props) => {
  const { todoList, setTodoList } = props;
  const [task, setTask] = useState<string>("")
  const [id, setId] = useState<number>(1)

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }
  const AddTask = () => {
    setId(id + 1)
    const newTask = {
      id,
      task
    }
    setTodoList([
      ...todoList,
      newTask
    ])
    setTask("")
  }

  return (
    <div className="TodoForm-Container">
      <div className="TodoForm-Wrapper">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Task" name="task" value={task} onChange={HandleChange} />
        </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={AddTask}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
