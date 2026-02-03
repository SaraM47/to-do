export type TodoStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE';

// Create an interface for Todo items 
export interface Todo {
  _id: any;
  id: string;
  title: string;
  description?: string;
  status: TodoStatus;
}