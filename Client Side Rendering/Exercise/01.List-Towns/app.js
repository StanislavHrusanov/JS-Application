import { render } from "./node_modules/lit-html/lit-html.js";
import { createUl } from "./template.js";

const root = document.getElementById('root');
const input = document.getElementById('towns');
const loadBtn = document.getElementById('btnLoadTowns');


loadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const towns = input.value.split(', ');
    render(createUl(towns), root);
});







function start() {





}