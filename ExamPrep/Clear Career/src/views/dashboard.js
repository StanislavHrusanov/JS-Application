import { getAllOffers } from "../api/data.js";
import { dashboardPageTemplate } from "../templates/dashboardPageTemplate.js";

export async function dashboardPage(ctx) {
    const allOffers = await getAllOffers();
    ctx.render(dashboardPageTemplate(allOffers));
}