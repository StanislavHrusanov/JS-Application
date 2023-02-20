import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsPageTemplate = (postDetails, user, totalDonationsCount, isUserDonate, onDelete, onDonate) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${postDetails.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${postDetails.title}</h2>
                <p class="post-description">Description: ${postDetails.description}</p>
                <p class="post-address">Address: ${postDetails.address}</p>
                <p class="post-number">Phone number: ${postDetails.phone}</p>
                <p class="donate-Item">Donate Materials: ${totalDonationsCount}</p>

                <!--Edit and Delete are only for creator-->
                ${user ? html`<div class="btns">
                    ${user && user._id == postDetails._ownerId ? html`<a href="/edit/${postDetails._id}"
                        class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : null}

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${user && user._id != postDetails._ownerId && isUserDonate == 0 ? html`<a @click=${onDonate}
                        href="javascript:void(0)" class="donate-btn btn">Donate</a>` : null}
                </div>`: null}

            </div>
        </div>
    </div>
</section>`;