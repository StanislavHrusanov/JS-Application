import { getAllShoes } from "../api/data.js";
import { dashboardTemplate } from "../templates/dashboardTemplate.js";

export async function dashboardPage(ctx){
    const allShoes = await getAllShoes();

    ctx.render(dashboardTemplate(allShoes));

}