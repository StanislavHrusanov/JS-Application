import { html } from "../../node_modules/lit-html/lit-html.js";

export const memeDetailsTemplate = (user, memeDetails, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${memeDetails.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${memeDetails.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${memeDetails.description}
            </p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${user && user._id == memeDetails._ownerId ? html`
            <a class="button warning" href="/edit/${memeDetails._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : null}

        </div>
    </div>
</section>`;