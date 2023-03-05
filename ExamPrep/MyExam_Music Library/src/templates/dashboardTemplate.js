import { html } from "../../node_modules/lit-html/lit-html.js";

export const dashboardTemplate = (allAlbums) => html`
<section id="dashboard">
    <h2>Albums</h2>
    ${allAlbums.length != 0 ? html`
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${allAlbums.map(albumTemplate)}
    </ul>` : html`
    <h2>There are no albums added yet.</h2>`}

    <!-- Display an h2 if there are no posts -->
    <h2>There are no albums added yet.</h2>
</section>`;

const albumTemplate = (album) => html`
<li class="card">
    <img src="${album.imageUrl}" alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
</li>`;