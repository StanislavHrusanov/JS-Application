import { html } from "../../node_modules/lit-html/lit-html.js";

export const dashboardTemplate = (allPets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${allPets.length != 0 ? html`${allPets.map(petTemplate)}` : html`<div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`}
    </div>
</section>`;

const petTemplate = (petDetails) => html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src="${petDetails.image}">
    </article>
    <h2 class="name">${petDetails.name}</h2>
    <h3 class="breed">${petDetails.breed}</h3>
    <div class="action">
        <a class="btn" href="/details/${petDetails._id}">Details</a>
    </div>
</div>`;