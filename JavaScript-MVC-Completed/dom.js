export function createElement(elem, className) {
  const element = document.createElement(elem);

  if (className) element.classList.add(className);

  return element;
}

export function getElement(selector) {
  return document.querySelector(selector);
}
