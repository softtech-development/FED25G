import { MenuComponent } from './menu-component.js';

export class MenuItem extends MenuComponent {
  constructor(name, url, active = false) {
    super(name);

    this.url = url;
    this.active = active;
  }

  getDescription() {
    return `${this.name} - ${this.url} ${this.active ? '(active)' : ''}`;
  }
}
