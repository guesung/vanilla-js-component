import Component from "./Component.js";

const foods = ["삼겹살", "감자탕", "치킨"];

export default class Foods extends Component {
  template() {
    return `
      <h1>내가 가장 좋아하는 음식들</h1>
      <ul>
        ${foods.map((food) => `<li>${food}</li>`).join("")}
      </ul>
      <form>
        <input id="add-food" />
        <button>음식 추가</button>
      </form>
    `;
  }

  attachEventListener() {
    document
      .querySelector("#foods")
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const addFoodInputValue = document.querySelector("#add-food").value;
        foods.push(addFoodInputValue);

        this.render();
      });
  }
}
