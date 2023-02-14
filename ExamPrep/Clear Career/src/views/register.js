import { register } from "../api/user.js";
import { registerPageTemplate } from "../templates/registerPageTemplate.js";

export function registerPage(ctx) {
    ctx.render(registerPageTemplate(onSubmit));

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

        await register(dataAsObj);
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/dashboard');
    }
}