import { addMovie } from "../api/data.js";

const view = document.getElementById('add-movie');

const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;
export function showAddMovie(context) {
    ctx = context;
    context.showView(view);
}

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    if (title == '' || description == '' || img == '') {
        return alert('All fields are required!');
    }

    addMovie({
        title,
        description,
        img
    });

    form.reset();
    ctx.goTo('/');
}