export class MenuComponent {
  constructor(name) {
    if (this.constructor == MenuComponent) {
      throw new Error(
        'MenuComponent är en abstrakt klass och kan inte skapas direkt.',
      );
    }

    this.name = name;
  }

  getDescription() {
    throw new Error('Metoden måste åsidosättas');
  }

  add(component) {
    throw new Error('Not implemented');
  }

  remove(component) {
    throw new Error('Not implemented');
  }

  getChild(index) {
    throw new Error('Not implemented');
  }

  isComposite() {
    return false;
  }
}
