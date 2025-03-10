import "./style.css";

function appendMain() {
  document.querySelector("#app").innerHTML = `
    <main id="foods">
    </main>
  `;
}

const foods = ["삼겹살", "감자탕", "치킨"];

function appendFoods(foods) {
  document.querySelector("#foods").innerHTML = `
    <h1>내가 가장 좋아하는 음식들</h1>
    <ul>
      ${foods.map((food) => `<li>${food}</li>`).join("")}
    </ul>
    <form>
      <input id="add-food" />
      <button>음식 추가</button>
    </form>
  `;

  document
    .querySelector("#foods")
    .querySelector("form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const addFoodInputValue = document.querySelector("#add-food").value;
      foods.push(addFoodInputValue); // 피자

      console.log(foods); // ['삼겹살', '감자탕', '치킨', '피자']
    });
}

appendMain();
appendFoods(foods);
