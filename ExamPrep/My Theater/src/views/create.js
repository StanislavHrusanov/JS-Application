import { until } from "../../node_modules/lit-html/directives/until.js";
import { createTheater } from "../api/data.js";
import { createTemplate } from "../templates/createTemplate.js";
import { getFormDataAsObj } from "../util.js";

export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    function onSubmit(e) {
        const dataAsObj = getFormDataAsObj(e);

        async function creatingTheater() {
            return await createTheater(dataAsObj);
        }

        ctx.render(until(creatingTheater(), 'Loading...'));
        e.target.reset();
        ctx.page.redirect('/');
    }
}