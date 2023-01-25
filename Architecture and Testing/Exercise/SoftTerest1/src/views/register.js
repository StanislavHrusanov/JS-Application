import { register } from "../api/users.js";

const view = document.getElementById('registerView');
const form = view.querySelector('form');
form.addEventListener('submit', onSubmit);
view.remove();

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

    if (email.length < 3) {
        return alert('Email must include at least 3 symbols!')
    }
    if (password.length < 3) {
        return alert('Password must include at least 3 symbols!')
    }
    if (password != repass) {
        return alert('Passwords don\'t match!');
    }

    await register({ email, password });
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}