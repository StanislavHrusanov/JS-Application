import { getAllPets } from "../api/data.js";
import { dashboardTemplate } from "../templates/dashboardTemplate.js";

export async function dashboardPage(ctx) {
    const allPets = await getAllPets();

    ctx.render(dashboardTemplate(allPets));
}