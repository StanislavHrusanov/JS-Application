import { editAlbum, getAlbumDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";
import { getFormDataAsObj } from "../util.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function editPage(ctx) {
    const albumId = ctx.params.id;

    ctx.render(until(loadingForm(), 'Loading...'));

    async function loadingForm() {
        const albumDetails = await getAlbumDetails(albumId);

        return editTemplate(albumDetails, onSubmit);
    }

    function onSubmit(e) {
        const dataAsObj = getFormDataAsObj(e);

        async function edittingAlbum() {
            return await editAlbum(albumId, dataAsObj);
        }

        ctx.render(until(edittingAlbum(), 'Loading...'));
        e.target.reset();
        ctx.page.redirect('/details/' + albumId);
    }
}