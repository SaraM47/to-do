import "./TodoItem.css"

// Map todo status to readable labels
const statusLabelMap: Record<string, string> = {
  NOT_STARTED: "Not started",
  IN_PROGRESS: "Ongoing",
  DONE: "Completed",
}

// Function component for displaying a single todo item
export default function TodoItem({ todo, onStatusChange, onDelete }: any) {
  const selectId = `status-${todo._id}`

  // Render the todo item
  return (
    <li className="todo-item">
      {/* Text content */}
      <div className="todo-text">
        <strong className="todo-title">{todo.title}</strong>

        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
      </div>

      {/* Status badge */}
      <span className={`todo-status ${todo.status}`}>
        {statusLabelMap[todo.status]}
      </span>

      {/* Actions */}
      <div className="todo-item-actions">
        <label htmlFor={selectId} className="visually-hidden">
          Status
        </label>

      {/* Status */}
        <select
          id={selectId}
          value={todo.status}
          onChange={(e) => onStatusChange(todo._id, e.target.value)}
        >
          <option value="NOT_STARTED">Not started</option>
          <option value="IN_PROGRESS">Ongoing</option>
          <option value="DONE">Completed</option>
        </select>

        <button onClick={() => onDelete(todo._id)}>Remove</button>
      </div>
    </li>
  )
}
