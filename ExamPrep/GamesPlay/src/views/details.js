import { until } from "../../node_modules/lit-html/directives/until.js";
import { createComment, deleteGame, getAllComments, getGameDetails } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";
import { detailsWrapper, getFormDataAsObj, getUser } from "../util.js";

export async function detailsPage(ctx) {
    const user = getUser();
    const gameId = ctx.params.id;



    ctx.render(until(detailsWrapper(
        user,
        gameId,
        getGameDetails,
        getAllComments,
        detailsTemplate,
        onDelete,
        onComment
    ), 'Loading...'));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?');

        if (choice) {
            await deleteGame(gameId);
            ctx.page.redirect('/');
        }
    }

    async function onComment(e) {
        const dataAsObj = getFormDataAsObj(e);
        const comment = dataAsObj.comment;

        await createComment({ gameId, comment });
        e.target.reset();
        ctx.page.redirect('/details/' + gameId);
    }
}