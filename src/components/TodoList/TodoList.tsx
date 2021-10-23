import { useState } from 'react'
import { ITask } from './Interface'
import TodoForm from './TodoForm'

function TodoList() {
  const [todoList, setTodoList] = useState<ITask[]>([])
 
  return (
    <div>
      <TodoForm todoList={todoList} setTodoList = {setTodoList} />
      {
        todoList.map(todo => {
          return <div key={todo.id}>{todo.task}</div>
        })
      }
        </div>
  )
}

export default TodoList
