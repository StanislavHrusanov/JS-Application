import { onDetails } from './app.js';
import { html } from './node_modules/lit-html/lit-html.js';

export const template = (contacts) => html`
<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2>Name: ${contacts.name}</h2>
    <button @click=${onDetails} class="detailsBtn">Details</button>
    <div class="details" id="${contacts.id}">
        <p>Phone number: ${contacts.phoneNumber}</p>
        <p>Email: ${contacts.email}</p>
    </div>
</div>
</div>`;