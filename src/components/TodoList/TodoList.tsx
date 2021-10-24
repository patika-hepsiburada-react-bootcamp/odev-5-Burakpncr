import { useState } from 'react'
import { ITask } from './Interface'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Compiled from './Compiled'

function TodoList() {
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [compiledList, setCompiledList] = useState<ITask[]>([])

  return (
    <div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <div className="Todolist-Wrapper">
        <div className="Todos">
          <h3> Todos </h3>
          <hr />
          {
            todoList.map(todo => {
              return (
              <div key = {todo.id}> 
              <Todo 
              todo={todo} 
              todoList= {todoList} 
              setTodoList = {setTodoList} 
              compiledList = {compiledList}
              setCompiledList = {setCompiledList}
              />
              </div>)
            })
          }
        </div>
        <div className="Todos">
          <h3> Compiled </h3>
          <hr />
          {
            compiledList.map(todo => {
              return <div key ={todo.id}> <Compiled todo = {todo} /> </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default TodoList
