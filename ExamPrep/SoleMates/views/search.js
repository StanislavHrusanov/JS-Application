import { search } from "../api/data.js";
import { resultTemplate, searchTemplate } from "../templates/searchTemplate.js";
import { html, render } from '../node_modules/lit-html/lit-html.js';

export function searchPage(ctx) {
    ctx.render(searchTemplate());
    const ul = document.querySelector('ul');
    const user = JSON.parse(sessionStorage.getItem('user'));
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(form);

        const searched = formData.get('search');

        if (searched == '') {
            return alert('Search field is required!');
        }

        const res = await search(searched);
        res.length != 0 ? render(res.map(s => resultTemplate(s, user)), ul)
            : render(html`<h2>There are no results found.</h2>`, ul);
    }
}