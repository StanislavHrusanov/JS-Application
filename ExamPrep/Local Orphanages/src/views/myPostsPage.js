import { getMyPosts } from "../api/data.js";
import { myPostsPageTemplate } from "../templates/myPostsPageTemplate.js";
import { getUser } from "../util.js";

export async function myPostsPage(ctx) {
    const user = getUser();
    let myPosts = [];
    if (user) {
        myPosts = await getMyPosts(user._id);
    }
    ctx.render(myPostsPageTemplate(myPosts));
    ctx.updateNavBar();
}