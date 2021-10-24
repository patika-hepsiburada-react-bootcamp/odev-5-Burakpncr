import { FunctionComponent } from 'react'
import { ITask } from './Interface'

interface ICompiledProps {
  todo:ITask
 }

 const Compiled:FunctionComponent<ICompiledProps> = (props) =>  {
   const{ todo } = props
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">{todo.task}</li>
      </ul>
    </div>
  )
}

export default Compiled
