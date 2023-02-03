import { get, post } from './api.js';
import { render } from './node_modules/lit-html/lit-html.js';
import { template } from './template.js';


const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const inputField = document.getElementById('itemText');
const addBtn = document.querySelectorAll('form input')[1];
addBtn.addEventListener('click', addItem);

start();

async function start() {
    const select = document.getElementById('menu');
    const towns = Object.values(await get(url));

    render(towns.map(template), select);
}

async function addItem(e) {
    e.preventDefault();

    const text = inputField.value;

    await post(url, { text });
    inputField.value = '';

    start();
}