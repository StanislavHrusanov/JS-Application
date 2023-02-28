import { getAllTheaters } from "../api/data.js";
import { homeTemplate } from "../templates/homeTemplate.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function homePage(ctx) {
    ctx.render(until(wrapper(), 'Loading...'));
    ctx.updateNavBar();

    async function wrapper() {
        const allTheaters = await getAllTheaters()

        return homeTemplate(allTheaters);
    }
}