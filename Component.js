export default class Component {
  #element;

  constructor() {
    this.render();
    this.attachEventListener();
  }

  render() {
    if (!this.#element) this.#element = document.createElement("div");

    this.#element.innerHTML = this.template();

    return this.#element;
  }

  template() {
    return ``;
  }

  attachEventListener() {}

  get element() {
    return this.#element;
  }
}
