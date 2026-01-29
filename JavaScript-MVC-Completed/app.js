import { Controller } from './controller.js';
import { Model } from './model.js';
import { View } from './view.js';

const initApp = () => {
  new Controller(new Model(), new View());
};

document.addEventListener('DOMContentLoaded', initApp);
