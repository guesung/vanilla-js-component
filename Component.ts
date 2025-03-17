export default class Component<Props, State> {
  #element: HTMLElement;
  #props: Props;
  state: State;

  constructor(props: Props) {
    this.#props = props;

    this.setup();
    this.render();
    this.attachEventListener();
  }

  setup() {}

  render() {
    if (!this.#element) this.#element = document.createElement("div");

    this.#element.innerHTML = this.template();
  }

  setState(nextState: Partial<State>) {
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

  get props() {
    return this.#props;
  }
}
