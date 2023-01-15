import { edit } from "../api/data.js";

const view = document.getElementById('edit-movie');
const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);
let id = null;
let ctx = null;
export function showEditMovie(context, innerId) {
    ctx = context;
    id = innerId;
    context.showView(view);
}

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    edit(id, {
        title,
        description,
        img
    });
    ctx.goTo('/details', id);
}