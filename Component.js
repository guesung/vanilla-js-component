export default class Component {
  #element;
  state = {};

  constructor() {
    this.setup();
    this.render();
    this.attachEventListener();
  }

  setup() {}

  render() {
    if (!this.#element) this.#element = document.createElement("div");

    this.#element.innerHTML = this.template();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  template() {
    return ``;
  }

  attachEventListener() {}

  get element() {
    return this.#element;
  }
}
