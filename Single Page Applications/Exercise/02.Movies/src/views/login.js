import { login } from "../api/users.js";

const view = document.getElementById('form-login');

const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showView(view);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    await login({ email, password });
    ctx.updateNav();
    ctx.goTo('/');
}