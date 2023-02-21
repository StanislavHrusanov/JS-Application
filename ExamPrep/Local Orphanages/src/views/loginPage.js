import { login } from "../api/user.js";
import { loginPageTemplate } from "../templates/loginPageTemplate.js";
import { submit } from "../util.js";

export function loginPage(ctx) {
    ctx.render(loginPageTemplate(onSubmit));

    async function onSubmit(e) {

        const dataAsObj = submit(e);

        await login(dataAsObj);
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/');
    }
}