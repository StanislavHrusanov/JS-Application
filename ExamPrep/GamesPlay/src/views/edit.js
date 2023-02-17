import { editGame, getGameDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";
import { getFormDataAsObj } from "../util.js";

export async function editPage(ctx) {
    const gameId = ctx.params.id;
    const gameDetails = await getGameDetails(gameId);
    ctx.render(editTemplate(gameDetails, onSubmit));

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await editGame(gameId, dataAsObj);
        e.target.reset();
        ctx.page.redirect('/details/' + gameId);
    }
}