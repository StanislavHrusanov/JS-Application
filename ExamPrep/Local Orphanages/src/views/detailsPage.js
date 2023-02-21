import { deletePost, donate, getPostDetails, getTotalDonationsCount, isUserDonate as donateOrNot } from "../api/data.js";
import { detailsPageTemplate } from "../templates/detailsPageTemplate.js";
import { getUser } from "../util.js";

export async function detailsPage(ctx) {
    const postId = ctx.params.id;
    const user = getUser();
    const postDetails = await getPostDetails(postId);
    let totalDonationsCount = await getTotalDonationsCount(postId);
    let isUserDonate;

    if (user) {
        isUserDonate = await donateOrNot(postId, user._id);
    }

    ctx.render(detailsPageTemplate(postDetails, user, totalDonationsCount, isUserDonate, onDelete, onDonate));
    ctx.updateNavBar();


    async function onDelete() {

        const choice = confirm('Are you sure you want delete this post?');

        if (choice) {
            await deletePost(postId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {

        await donate({ postId });

        ctx.updateNavBar();
        ctx.page.redirect(`/details/${postId}`);
    }
}