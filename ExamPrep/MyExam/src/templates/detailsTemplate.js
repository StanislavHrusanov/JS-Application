import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (user, albumDetails, likes, isUserAddLike, addLike, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${albumDetails.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${albumDetails.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${albumDetails.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${albumDetails.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${albumDetails.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${albumDetails.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${user && user._id != albumDetails._ownerId && isUserAddLike == 0 ? html`
            <a @click=${addLike} href="javascript:void(0)" id="like-btn">Like</a>` : null}
            ${user && user._id == albumDetails._ownerId ? html`
            <a href="/edit/${albumDetails._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
        </div>
    </div>
</section>`;