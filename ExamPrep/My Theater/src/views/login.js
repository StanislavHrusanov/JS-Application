import { login } from "../api/user.js";
import { loginTemplate } from "../templates/loginTemplate.js";
import { getFormDataAsObj } from "../util.js";

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await login(dataAsObj);
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/');
    }
}