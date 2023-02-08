import { getMyFurnitures } from "../api/data.js";
import { myFurnituresTemplate } from "../template.js";


export async function myFurnituresPage(ctx) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const furnitures = await getMyFurnitures(user._id);
    ctx.render(myFurnituresTemplate(furnitures));
    ctx.updateNavBar();
}