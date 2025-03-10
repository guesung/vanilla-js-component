import "./style.css";
import Foods from "./Foods";

function appendMain() {
  document.querySelector("#app").innerHTML = `
    <main id="foods">
    </main>
  `;
}

appendMain();

const foods = new Foods();
document.querySelector("#foods").appendChild(foods.render());
foods.attachEventListener();
