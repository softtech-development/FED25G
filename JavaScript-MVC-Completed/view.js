import { createElement, getElement } from './dom.js';

export class View {
  constructor() {
    this.app = getElement('#root');

    // Skapa ett h1 element...
    this.title = createElement('h1');
    this.title.textContent = 'Att göra!';

    // Skapa ett formulär...
    this.form = createElement('form');
    // Skapa en textruta...
    this.input = createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Lägg något att göra';
    this.input.name = 'todo';

    // Skapa submit knappen...
    this.submitButton = createElement('button');
    this.submitButton.textContent = 'Spara';

    // Skapa listan för våra att göra...
    this.todoList = createElement('ul', 'todo-list');

    // Lägg till textruta och submit knapp till formuläret...
    this.form.append(this.input, this.submitButton);
    // Lägg till alltihopa till vår div tag med id #root...
    this.app.append(this.title, this.form, this.todoList);
  }

  get #todoText() {
    return this.input.value;
  }

  #resetInput() {
    this.input.value = '';
  }

  displayTodos(todos) {
    // Börja med att ta bort alla att göra ifrån lista...
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = createElement('p');
      p.textContent = 'Inget att göra? Lägg till något!';
      this.todoList.append(p);
    } else {
      todos.forEach((todo) => {
        const li = createElement('li');
        li.id = todo.id;
        const span = createElement('span');

        span.textContent = todo.text;

        li.appendChild(span);

        this.todoList.appendChild(li);
      });
    }
  }

  // Knyta samman formulärets submit händelse med texten som vi matar in...
  bindAddTodo(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.#todoText) {
        handler(this.#todoText);
        this.#resetInput();
      }
    });
  }
}
