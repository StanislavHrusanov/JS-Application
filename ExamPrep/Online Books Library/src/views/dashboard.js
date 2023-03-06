import { getAllBooks } from "../api/data.js";
import { dashboardTemplate } from "../templates/dashboardTemplate.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function dashboardPage(ctx) {
    ctx.render(until(wrapper(), 'Loading...'));
    ctx.updateNavBar();
}

async function wrapper() {
    const allBooks = await getAllBooks();
    return dashboardTemplate(allBooks);
}