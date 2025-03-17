import "./style.css";
import Foods from "./Foods";

function appendMain() {
  document.querySelector("#app").innerHTML = `
    <main id="foods">
    </main>
  `;
}

appendMain();

const foods = new Foods({ foods: ["삼겹살", "감자탕", "치킨"] });
document.querySelector("#foods").appendChild(foods.element);
