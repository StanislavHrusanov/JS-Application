import { editBook, getBookDetails } from "../api/data.js";
import { editTemplate } from "../templates/editTemplate.js";
import { until } from "../../node_modules/lit-html/directives/until.js";
import { getFormDataAsObj } from "../util.js";

export function editPage(ctx) {
    const bookId = ctx.params.id;

    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const bookDetails = await getBookDetails(bookId);

        return editTemplate(bookDetails, onSubmit);
    }

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await editBook(bookId, dataAsObj);
        e.target.reset();
        ctx.page.redirect('/details/' + bookId);
    }
}