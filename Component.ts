interface StrictObject {
  [key: string]: any;
  length?: never;
}

export default class Component<
  Props extends StrictObject = {},
  State extends StrictObject = {}
> {
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
    const element = document.createElement("div");
    element.innerHTML = this.template();

    const elementFirstChild = element.firstElementChild as HTMLElement;

    if (!this.#element) this.#element = elementFirstChild;
    else this.#element.innerHTML = elementFirstChild.innerHTML;
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
