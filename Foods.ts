import Component from "./Component.js";

interface FoodsProps {
  foods: string[];
}

interface FoodsState {
  foods: string[];
}

export default class Foods extends Component<FoodsProps, FoodsProps> {
  setup() {
    this.state = {
      foods: this.props.foods,
    };
  }

  template() {
    return `
      <section>
        <h1>내가 가장 좋아하는 음식들</h1>
        <ul>
          ${this.state.foods.map((food) => `<li>${food}</li>`).join("")}
        </ul>
        <form>
          <input id="add-food" />
          <button>음식 추가</button>
        </form>
      </section>
    `;
  }

  attachEventListener() {
    this.element.querySelector("form")?.addEventListener("submit", (event) => {
      event.preventDefault();

      const addFoodInputValue = (
        this.element.querySelector("#add-food") as HTMLInputElement
      )?.value;

      this.setState({ foods: [...this.state.foods, addFoodInputValue] });
    });
  }
}
