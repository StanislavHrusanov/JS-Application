import { addAlbum } from "../api/data.js";
import { addAlbumTemplate } from "../templates/addAlbumTemplate.js";
import { getFormDataAsObj } from "../util.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function addAlbumPage(ctx) {
    ctx.render(addAlbumTemplate(onSubmit));

    function onSubmit(e) {
        const dataAsObj = getFormDataAsObj(e);

        async function addingAlbum() {
            return await addAlbum(dataAsObj);
        }

        ctx.render(until(addingAlbum(), 'Loading...'));
        e.target.reset();
        ctx.page.redirect('/dashboard');
    }
}