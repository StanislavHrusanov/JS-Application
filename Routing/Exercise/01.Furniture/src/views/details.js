import { getFurnitureDetails } from "../api/data.js";
import { detailsTemplate } from "../template.js";

export async function detailsPage(ctx) {
    let isOwner;
    const user = JSON.parse(sessionStorage.getItem('user'));
    const id = ctx.params.id;
    const furniture = await getFurnitureDetails(id);
    if (user) {
        isOwner = user._id == furniture._ownerId;
    }
    ctx.render(detailsTemplate(furniture, isOwner, user));
}