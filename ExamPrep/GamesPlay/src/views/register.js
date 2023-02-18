import { register } from "../api/user.js";
import { registerTemplate } from "../templates/registerTemplate.js";

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }

        if (password != confirmPassword) {
            return alert('Passwords dot\'t match!');
        }

        await register({ email, password });
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/');
    }
}