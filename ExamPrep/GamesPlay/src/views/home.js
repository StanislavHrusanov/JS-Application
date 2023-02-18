import { until } from "../../node_modules/lit-html/directives/until.js";
import { getNewGames } from "../api/data.js";
import { homeTemplate } from "../templates/homeTemplate.js";
import { recentGameWrapper } from "../util.js";

export function homePage(ctx) {
    ctx.render(until(recentGameWrapper(getNewGames, homeTemplate), 'Loading...'));
    ctx.updateNavBar();
}