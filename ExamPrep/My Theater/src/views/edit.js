import { until } from "../../node_modules/lit-html/directives/until.js";
import { editTheater, getTheaterDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";
import { getFormDataAsObj } from "../util.js";

export function editPage(ctx) {
    const theaterId = ctx.params.id;
    ctx.render(until(loadingForm(), 'Loading...'));

    async function loadingForm() {
        const theaterDetails = await getTheaterDetails(theaterId);

        return editTemplate(theaterDetails, onSubmit);
    }

    function onSubmit(e) {
        const dataAsObj = getFormDataAsObj(e);

        async function edittingTheater() {

            return await editTheater(theaterId, dataAsObj);
        }

        ctx.render(until(edittingTheater(), 'Loading...'));
        e.target.reset();
        ctx.page.redirect('/details/' + theaterId);
    }
}