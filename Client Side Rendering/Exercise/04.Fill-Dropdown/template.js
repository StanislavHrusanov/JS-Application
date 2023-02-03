import { html } from "./node_modules/lit-html/lit-html.js";

export const template = (town) => html`
<option value=${town._id}>${town.text}</option>`;