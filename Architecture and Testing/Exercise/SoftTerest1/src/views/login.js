import { login } from "../api/users.js";

const view = document.getElementById('loginView');
const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);
view.remove();

let ctx = null;
export function showLogin(context) {
    ctx = context;
    context.showView(view);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    await login({ email, password });
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}