import { createGame } from "../api/data.js";
import { createTemplate } from "../templates/createTemplate.js";
import { getFormDataAsObj } from "../util.js";

export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await createGame(dataAsObj)
        e.target.reset();
        ctx.page.redirect('/');
    }
}