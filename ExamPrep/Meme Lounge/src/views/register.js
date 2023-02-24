import { register } from "../api/user.js";
import { showNotification } from "../notifications.js";
import { registerTemplate } from "../templates/registerTemplate.js";

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPass = formData.get('repeatPass');
        const gender = formData.get('gender');


        if (username == '' || email == '' || password == '' || gender == '') {
            showNotification('All fields are required!');
            return;
        }

        if (password != repeatPass) {
            showNotification('Passwords don\'t match!');
            return;
        }

        await register({ username, email, password, gender });
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/allMemes');
    }
}