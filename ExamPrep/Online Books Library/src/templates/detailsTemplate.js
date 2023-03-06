import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (user, bookDetails, onDelete, isUserLiked, addLike, totalLikesForABook) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${bookDetails.title}</h3>
        <p class="type">Type: ${bookDetails.type}</p>
        <p class="img"><img src="${bookDetails.imageUrl}"></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            ${user && user._id == bookDetails._ownerId ? html`
            <a class="button" href="/edit/${bookDetails._id}"> Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)"> Delete</a>` : null}

            ${user && user._id != bookDetails._ownerId && !isUserLiked ? html`
            <a @click=${addLike} class="button" href="javascript:void(0)">Like</a>` : null}

            <!--( for Guests and Users)  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${totalLikesForABook}</span>
            </div>
            <!--Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${bookDetails.description}</p>
    </div>
</section>`;