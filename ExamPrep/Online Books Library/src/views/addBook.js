import { addBook } from "../api/data.js";
import { addBookTemplate } from "../templates/addBookTemplate.js";
import { getFormDataAsObj } from "../util.js";

export function addBookPage(ctx) {
    ctx.render(addBookTemplate(onSubmit))

    async function onSubmit(e) {

        const dataAsObj = getFormDataAsObj(e);

        await addBook(dataAsObj);
        e.target.reset();
        ctx.page.redirect('/');
    }
}