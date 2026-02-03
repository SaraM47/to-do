import type { Todo, TodoStatus } from "../interfaces/Todo"

// Base URL for the API from environment variables
const BASE_URL = import.meta.env.VITE_API_URL

// Function to get all todos
export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(`${BASE_URL}/todos`)
  if (!res.ok) throw new Error("Could not retrieve todos")
  return res.json()
}

// Function to create a new todo
export async function createTodo(data: {
  title: string
  description?: string
  status: TodoStatus
}): Promise<Todo> {
// Send a POST request to create a new todo
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Could not create todo")
  return res.json()
}

// Function to update an existing todo
export async function updateTodo(
  id: string,
  data: {
    title: string
    description?: string
    status: TodoStatus
  }
): Promise<Todo> {
    // Send a PUT request to update the todo
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error("Could not update todo")
  return res.json()
}

// Function to update the status of a todo
export async function updateTodoStatus(
  id: string,
  status: TodoStatus
): Promise<Todo> {
    // Send a PATCH request to update the todo status
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  })
  if (!res.ok) throw new Error("Could not create update todo")
  return res.json()
}

// Function to delete a todo
export async function deleteTodo(id: string): Promise<void> {
  // Send a DELETE request to remove the todo
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error("Could not remove todo")
}
