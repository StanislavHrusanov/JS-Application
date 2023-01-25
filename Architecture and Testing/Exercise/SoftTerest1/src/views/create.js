import { sendIdea } from "../api/data.js";

const view = document.getElementById('createView');
const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);
view.remove();

let ctx = null;
export function showCreate(context) {
    ctx = context;
    context.showView(view);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageURL').trim();

    if (title.length < 6) {
        return alert('Title must be at least 6 symbols!');
    }
    if (description.length < 10) {
        return alert('Desccription must be at least 10 symbols!');
    }
    if (img.length < 5) {
        return alert('Img must be at least 5 symbols!');
    }

    sendIdea({
        title,
        description,
        img
    });
    form.reset();
    ctx.goTo('/dashboard');
}