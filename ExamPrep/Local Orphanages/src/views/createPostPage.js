import { createPost } from "../api/data.js";
import { createPostPageTemplate } from "../templates/createPostPageTemplate.js";
import { submit } from "../util.js";

export function createPostPage(ctx) {
    ctx.render(createPostPageTemplate(onSubmit));

    async function onSubmit(e) {

        const dataAsObj = submit(e);

        await createPost(dataAsObj);
        e.target.reset();
        ctx.updateNavBar();
        ctx.page.redirect('/');
    }
}