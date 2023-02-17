import { until } from "../../node_modules/lit-html/directives/until.js";
import { getAllGames } from "../api/data.js";
import { allGamesTemplate } from "../templates/allGamesTemplate.js";
import { allGamesWrapper } from "../util.js";

export function allGamesPage(ctx) {
    ctx.render(until(allGamesWrapper(getAllGames, allGamesTemplate), 'Loading...'));
    ctx.updateNavBar();
}