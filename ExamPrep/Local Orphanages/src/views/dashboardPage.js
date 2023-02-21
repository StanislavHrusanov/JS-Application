import { getAllPosts } from "../api/data.js";
import { dashboardPageTemplate } from "../templates/dashboardPageTemplate.js";

export async function dashboardPage(ctx) {
    const allPosts = await getAllPosts();

    ctx.render(dashboardPageTemplate(allPosts));
    ctx.updateNavBar();
}