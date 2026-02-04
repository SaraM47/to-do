import type { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem"
import "./TodoList.css"

// Function component for displaying a list of todos 
export default function TodoList({ todos, onStatusChange, onDelete }: any) {
  return (
    <ul className="todo-list">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
