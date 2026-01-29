import { MenuComponent } from './menu-component.js';

export class MenuGroup extends MenuComponent {
  constructor(name) {
    super(name);

    this.children = [];
  }

  add(component) {
    this.children.push(component);
    return this;
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) this.children.splice(index, 1);
    return this;
  }

  getChild(index) {
    return this.children[index];
  }

  getDescription() {
    return `${this.name} (${this.children.length} items)`;
  }

  isComposite() {
    return true;
  }

  listItems() {
    console.group(this.name);

    this.children.forEach((child) => {
      if (child.isComposite()) {
        child.listItems();
      } else {
        console.log(child.getDescription());
      }
    });

    console.groupEnd();
  }
}
