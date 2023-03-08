import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsTemplate = (petDetails, user, totalDonationCount, isUserDonate, onDelete, onDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${petDetails.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${petDetails.name}</h1>
                <h3>Breed: ${petDetails.breed}</h3>
                <h4>Age: ${petDetails.age}</h4>
                <h4>Weight: ${petDetails.weight}</h4>
                <h4 class="donation">Donation: ${totalDonationCount * 100}$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            ${user ? html`<div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                ${user && user._id == petDetails._ownerId ? html`<a href="/edit/${petDetails._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>` : null}
                <!--(Bonus Part) Only for no creator and user-->
                ${user && user._id != petDetails._ownerId && isUserDonate == 0 ? html`<a @click=${onDonate}
                    href="javascript:void(0)" class="donate">Donate</a>` : null}
            </div>`: null}
        </div>
    </div>
</section>`;