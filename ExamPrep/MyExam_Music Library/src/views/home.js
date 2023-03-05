import { homeTemplate } from "../templates/homeTemplate.js";

export function homePage(ctx) {
    ctx.render(homeTemplate());
    ctx.updateNavBar();
}