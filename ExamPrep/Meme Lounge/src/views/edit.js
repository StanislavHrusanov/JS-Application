import { editMeme, getMemeDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";
import { getFormDataAsObj } from "../util.js";

export async function editPage(ctx) {

    const memeId = ctx.params.id;
    const memeDetails = await getMemeDetails(memeId);

    ctx.render(editTemplate(memeDetails, onSubmit));

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await editMeme(memeId, dataAsObj);
        e.target.reset();
        ctx.page.redirect('/details/' + memeId);
    }
}