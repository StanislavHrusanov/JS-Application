import { register } from "../api/users.js";

const view = document.getElementById('form-sign-up');

const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showView(view);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('repeatPassword').trim();

    if (email == '') {
        return alert('Email field is required!');
    }
    if (password.length < 6) {
        return alert('Password must be at least 6 symbols!');
    }
    if (password != repass) {
        return alert('Passwords don\'t match!');
    }

    await register({ email, password });
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}