import { register } from "../api/user.js";
import { registerTemplate } from "../templates/registerTemplate.js";

export function registerPage(ctx) {
    ctx.render(registerTemplate());
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('re-password').trim();

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        if (password != rePass) {
            return alert('Passwords don\'t match!');
        }

        await register({ email, password });
        form.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/dashboard');
    }
}