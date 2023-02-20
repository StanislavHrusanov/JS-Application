import { html } from "../../node_modules/lit-html/lit-html.js";

export const myPostsPageTemplate = (myPosts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${myPosts.length != 0 ? html`<div class="my-posts">
        ${myPosts.map(myPostTemplate)}
    </div>`: html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>`;

const myPostTemplate = (myPost) => html`
        <div class="post">
            <h2 class="post-title">${myPost.title}</h2>
            <img class="post-image" src="${myPost.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${myPost._id}" class="details-btn btn">Details</a>
            </div>
        </div>`;