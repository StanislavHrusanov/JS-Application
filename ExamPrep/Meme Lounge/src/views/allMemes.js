import { getAllMemes } from "../api/data.js";
import { allMemesTemplate } from "../templates/allMemesTemplate.js";

export async function allMemesPage(ctx) {
    ctx.updateNavBar();

    const allMemes = await getAllMemes();
    ctx.render(allMemesTemplate(allMemes));
}