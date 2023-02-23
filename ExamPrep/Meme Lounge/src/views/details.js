import { deleteMeme, getMemeDetails } from "../api/data.js";
import { memeDetailsTemplate } from "../templates/memeDetailsTemplate.js";
import { getUser } from "../util.js";

export async function detailsPage(ctx) {

    const user = getUser();
    const memeId = ctx.params.id;
    const memeDetails = await getMemeDetails(memeId);

    ctx.render(memeDetailsTemplate(user, memeDetails, onDelete));

    async function onDelete() {

        const choice = confirm('Are you sure you want delete this meme?');

        if (choice) {
            await deleteMeme(memeId);
            ctx.page.redirect('/allMemes');
        }
    }
}