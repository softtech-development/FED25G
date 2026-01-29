export class Model {
  constructor() {
    this.todos = [];
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length > 0 ? this.todos.at(-1).id + 1 : 1,
      text: todoText,
      completed: false,
    };

    this.todos.push(todo);
    this.onTodoListChanged(this.todos);
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }
}
