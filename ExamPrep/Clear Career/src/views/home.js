import { homePageTemplate } from "../templates/homeTemplate.js";

export function homePage(ctx) {
    ctx.render(homePageTemplate());
    ctx.updateNavBar();
}