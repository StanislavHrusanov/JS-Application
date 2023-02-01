import { html } from "./node_modules/lit-html/lit-html.js";
import { onClick } from "./app.js";

export const createUl = (cats) => html`<ul>${cats.map(createLi)}</ul>`;

const createLi = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${onClick} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;