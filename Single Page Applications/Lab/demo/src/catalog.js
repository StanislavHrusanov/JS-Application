import { get } from "./api.js";

const section = document.getElementById('catalogView');
const list = document.querySelector('ul');
section.remove();

export async function showCatalog(ctx) {
    ctx.render(section);

    list.replaceChildren('Loading...');

    const data = await get('/data/movies');

    const fragment = document.createDocumentFragment();

    data.map(createMovieItem).forEach(m => fragment.appendChild(m));

    list.replaceChildren(fragment);
}

function createMovieItem(data) {
    const li = document.createElement('li');
    li.textContent = data.title;
    return li;
}