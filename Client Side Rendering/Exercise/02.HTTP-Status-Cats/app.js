import { render } from "./node_modules/lit-html/lit-html.js";
import { cats } from './catSeeder.js';
import { createUl } from "./template.js";

const allCats = document.getElementById('allCats');


start();

function start() {

    render(createUl(cats), allCats);
}

export function onClick(e) {
    const button = e.target;
    const div = button.parentElement.children[1];

    if (button.textContent == 'Show status code') {
        button.textContent = 'Hide status code';
        div.style.display = 'block';
    } else if (button.textContent == 'Hide status code') {
        button.textContent = 'Show status code';
        div.style.display = 'none';
    }
}