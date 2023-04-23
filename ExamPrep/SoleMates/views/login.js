import { login } from "../api/user.js";
import { loginTemplate } from "../templates/loginTemplate.js";

export function loginPage(ctx) {
    ctx.render(loginTemplate());
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        await login({ email, password });
        form.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/dashboard');
    }
}