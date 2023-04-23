import { html } from '../node_modules/lit-html/lit-html.js';

export const searchTemplate = () => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        <ul class="card-wrapper">

            <!-- Display an h2 if there are no posts -->
            <!-- <h2>There are no results found.</h2> -->
        </ul>
    </div>
</section>`;

export const resultTemplate = (shoe, user) => html`
            <!-- Display a li with information about every post (if any)-->
            <li class="card">
                <img src="${shoe.imageUrl}" alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${shoe.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                ${user ? html`<a class="details-btn" href="">Details</a>` : null}
            </li>`
