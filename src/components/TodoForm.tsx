import { useId, useState } from "react"
import type { TodoStatus } from "../interfaces/Todo"
import "./TodoForm.css"

// Function component for the Todo form
export default function TodoForm({ onAdd }: any) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<TodoStatus>("NOT_STARTED")
  const [error, setError] = useState("")

  // Unique IDs for form elements
  const titleId = useId()
  const descriptionId = useId()
  const statusId = useId()
  const errorId = useId()

  // Handle form submission
  function submit(e: React.FormEvent) {
    e.preventDefault()

    // Validate title length
    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters")
      return
    }

    // Validate description length
    if (description.length > 200) {
      setError("Description can be a maximum of 200 characters.")
      return
    }

    // Call onAdd with the new todo data
    onAdd({
      title,
      description: description || undefined,
      status,
    })

    // Reset form fields
    setTitle("")
    setDescription("")
    setStatus("NOT_STARTED")
    setError("")
  }

  // Render the form of the Todo
  return (
    <form className="todo-form" onSubmit={submit}>
      <h2 className="todo-form-title">Add new todo</h2>

      <label htmlFor={titleId}>Title</label>
      <input
        id={titleId}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        aria-describedby={error ? errorId : undefined}
      />

      <label htmlFor={descriptionId}>Description</label>
      <textarea
        id={descriptionId}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        aria-describedby={error ? errorId : undefined}
      />

      <label htmlFor={statusId}>Status</label>
      <select
        id={statusId}
        value={status}
        onChange={(e) => setStatus(e.target.value as TodoStatus)}
      >
        <option value="NOT_STARTED">Not started</option>
        <option value="IN_PROGRESS">Ongoing</option>
        <option value="DONE">Completed</option>
      </select>

      {error && (
        <p id={errorId} className="todo-form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit">Add</button>
    </form>
  )
}
