import { deleteShoe, getShoeDetails } from "../api/data.js";
import { shoeDetailsTemplate } from "../templates/shoeDetailsTemplate.js";

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const user = JSON.parse(sessionStorage.getItem('user'));
    const shoe = await getShoeDetails(id);

    ctx.render(shoeDetailsTemplate(shoe, user));
}

export async function onDelete(ctx) {

    const choice = confirm('Are you sure you want delete this item?');
    if (choice) {
        const id = ctx.params.id;
        await deleteShoe(id);
        ctx.page.redirect('/dashboard');
    }
}