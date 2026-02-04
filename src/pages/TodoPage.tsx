import { useEffect, useState } from "react"
import type { Todo, TodoStatus } from "../interfaces/Todo"
import { getTodos, createTodo, updateTodoStatus, deleteTodo, } from "../api/todoApi"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import "./TodoPage.css"
import { BeatLoader } from "react-spinners"

// Added function component for the Todo page 
function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  // Function to fetch todos from the API
  async function fetchTodos() {
    try {
      setLoading(true)
      setError(null)
      const data = await getTodos()
      setTodos(data)
    } catch {
      setError("Could not retrieve todos")
    } finally {
      setLoading(false)
    }
  }

  // Handler for adding a new todo
  async function handleAdd(todo: {
    title: string
    description?: string
    status: TodoStatus
  }) {
    const created = await createTodo(todo)
    setTodos((prev) => [created, ...prev])
  }

  // Handler for changing the status of a todo
  async function handleStatusChange(id: string, status: TodoStatus) {
    const updated = await updateTodoStatus(id, status)
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? updated : t))
    )
  }

  // Handler for deleting a todo
  async function handleDelete(id: string) {
    await deleteTodo(id)
    setTodos((prev) => prev.filter((t) => t._id !== id))
  }

  // Render the Todo page
  return (
    <main className="todo-page">

        <h1>Todo-list</h1>

      {loading && <BeatLoader />}
      {error && <p className="todo-error">{error}</p>}

      {!loading && !error && (
        <section className="todo-content">
          <TodoForm onAdd={handleAdd} />
          <TodoList
            todos={todos}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </section>
      )}
    </main>
  )
}

export default TodoPage
