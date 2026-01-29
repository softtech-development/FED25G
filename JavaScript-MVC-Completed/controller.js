export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Knyta samman controller klassen med modellen...
    // Vi skapar en "CallBack" till oss själva
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);

    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged = (todos) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText) => {
    this.model.addTodo(todoText);
  };
}
