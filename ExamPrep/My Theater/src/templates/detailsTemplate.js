import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (user, theaterDetails, isUserAddLike, likes, onDelete, addLike) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theaterDetails.title}</h1>
            <div>
                <img src="${theaterDetails.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theaterDetails.description}</p>
            <h4>Date: ${theaterDetails.date}</h4>
            <h4>Author: ${theaterDetails.author}</h4>
            <div class="buttons">
                ${user && user._id == theaterDetails._ownerId ? html`
                <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${theaterDetails._id}">Edit</a>` : null}
                ${user && user._id != theaterDetails._ownerId && isUserAddLike == 0 ? html`
                <a @click=${addLike} class="btn-like" href="javascript:void(0)">Like</a>` : null}
            </div>
            <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>`;