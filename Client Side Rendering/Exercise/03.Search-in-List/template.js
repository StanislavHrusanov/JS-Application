import { html } from "./node_modules/lit-html/lit-html.js";

export const createUl = (towns) => html`
<ul>${towns.map(createLi)}</ul>`;

const createLi = (town) => html`
<li class=${town.match ? 'active' : ''}> ${town.name}</li>`;