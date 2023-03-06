import { getMyBooks } from "../api/data.js";
import { myBooksTemplate } from "../templates/myBooksTemplate.js";
import { getUser } from "../util.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function myBooksPage(ctx) {
    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const user = getUser();
        const myBooks = await getMyBooks(user._id);

        return myBooksTemplate(myBooks);
    }
}