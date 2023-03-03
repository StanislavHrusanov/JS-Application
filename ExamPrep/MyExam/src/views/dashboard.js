import { getAllAlbums } from "../api/data.js";
import { dashboardTemplate } from "../templates/dashboardTemplate.js";
import { until } from "../../node_modules/lit-html/directives/until.js";

export function dashboardPage(ctx) {
    ctx.render(until(wrapper(), 'Loading...'));

    async function wrapper() {
        const allAlbums = await getAllAlbums();

        return dashboardTemplate(allAlbums);
    }
}