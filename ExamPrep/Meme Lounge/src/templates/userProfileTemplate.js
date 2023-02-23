import { html } from "../../node_modules/lit-html/lit-html.js";

export const userProfileTeplate = (user, userMemes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${userMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${userMemes.length != 0 ? html`
        ${userMemes.map(userMemeTemplate)}`
        : html`
        <p class="no-memes">No memes in database.</p>`}
    </div>
</section>`;

const userMemeTemplate = (userMeme) => html`
<div class="user-meme">
    <p class="user-meme-title">${userMeme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${userMeme.imageUrl}">
    <a class="button" href="/details/${userMeme._id}">Details</a>
</div>`;