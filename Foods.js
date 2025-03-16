import Component from "./Component.js";

export default class Foods extends Component {
  setup() {
    this.state = {
      foods: ["삼겹살", "감자탕", "치킨"],
    };
  }

  template() {
    return `
      <h1>내가 가장 좋아하는 음식들</h1>
      <ul>
        ${this.state.foods.map((food) => `<li>${food}</li>`).join("")}
      </ul>
      <form>
        <input id="add-food" />
        <button>음식 추가</button>
      </form>
    `;
  }

  attachEventListener() {
    this.element.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const addFoodInputValue = document.querySelector("#add-food").value;

      this.setState({ foods: [...this.state.foods, addFoodInputValue] });
    });
  }
}
