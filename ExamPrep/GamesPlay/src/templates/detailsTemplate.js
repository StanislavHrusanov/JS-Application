import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (user, gameDetails, comments, onDelete, onComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${gameDetails.imageUrl}" />
            <h1>${gameDetails.title}</h1>
            <span class="levels">MaxLevel: ${gameDetails.maxLevel}</span>
            <p class="type">${gameDetails.category}</p>
        </div>

        <p class="text">
            ${gameDetails.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length != 0 ? html`
            <ul>
                ${comments.map(commentTemplate)}
            </ul>`: html`
            <p class="no-comment">No comments.</p>`}
            <!-- Display paragraph: If there are no games in the database -->

        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${user && user._id == gameDetails._ownerId ? html`<div class="buttons">
            <a href="/edit/${gameDetails._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`: null}
    </div>
    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${user && user._id != gameDetails._ownerId ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>}`: null}

</section>`;

const commentTemplate = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>`;