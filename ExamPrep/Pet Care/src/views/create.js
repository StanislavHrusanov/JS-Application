import { createPet } from "../api/data.js";
import { createTemplate } from "../templates/createTemplate.js";
import { getFormDataAsObj } from "../util.js";

export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await createPet(dataAsObj);
        e.target.reset();
        ctx.page.redirect('/');
    }
}