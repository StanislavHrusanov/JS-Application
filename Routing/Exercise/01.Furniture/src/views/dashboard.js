import { getAllFurnitures } from "../api/data.js";
import { dashboardTemplate } from "../template.js";


export async function dashboard(ctx) {
    const furnitures = await getAllFurnitures();
    ctx.render(dashboardTemplate(furnitures));
    ctx.updateNavBar();
}