# 🧠 NestJS Challenge #1: Create a CRUD for "Tasks" with Custom Validation

## 🎯 Goal:

Build a simple NestJS REST API that manages a list of tasks (like a to-do app), with custom DTO validation and filtering.

## 📋 Requirements:

1. Create a Task Entity:

```bash
export class Task {
   id: string; // UUID
   title: string;
   description?: string;
   status: 'pending' | 'in-progress' | 'done';
   createdAt: Date;
}
```

2. CRUD Endpoints:

- POST /tasks – Create a task (title required, status optional but default is 'pending')
- GET /tasks – List all tasks, with optional status and search (on title/description) filters
- GET /tasks/:id – Get task by ID
- PATCH /tasks/:id – Update task status or description
- DELETE /tasks/:id – Delete a task

3. DTO with Class Validator:

- Title must be a non-empty string (min length: 3)
- If description is provided, it must be at least 10 characters
- Status must be one of the allowed values

4. Custom Pipe (Bonus):

- Create a custom ParseStatusPipe that validates the status query parameter and throws a 400 error if invalid.

## 🚀 Bonus Level (Optional):

- Add in-memory storage using an array (no DB needed yet).
- Sort the result of GET /tasks by createdAt (newest first).
- Automatically generate UUID for task ID.
