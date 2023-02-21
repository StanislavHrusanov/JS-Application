import { editPost, getPostDetails } from "../api/data.js";
import { editPostPageTemplate } from "../templates/editPostPageTemplate.js";
import { submit } from "../util.js";

export async function editPostPage(ctx) {
    const postId = ctx.params.id;
    const postDetails = await getPostDetails(postId);
    ctx.render(editPostPageTemplate(onSubmit, postDetails));

    async function onSubmit(e) {
        
        const dataAsObj = submit(e);

        await editPost(postId, dataAsObj);
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect(`/details/${postId}`);
    }
}
