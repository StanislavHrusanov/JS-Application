import { login } from "../api/user.js";
import { loginTemplate } from "../templates/loginTemplate.js";

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const dataAsObj = Object.fromEntries(formData.entries());

        for (let key in dataAsObj) {
            dataAsObj[key] = dataAsObj[key].trim();
            if (dataAsObj[key] == '') {
                return alert(`All fields are required!`);
            }
        }

        await login(dataAsObj);
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/dashboard');
    }
}