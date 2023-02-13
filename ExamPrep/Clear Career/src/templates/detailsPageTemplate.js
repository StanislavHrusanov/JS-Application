import { html } from "../../node_modules/lit-html/lit-html.js";

export const detailsPageTemplate = (offerDetails, totalApplicationsCount, user, countOfApplicatiosForUser) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="./images/example2.png" alt="example1" />
        <p id="details-title">${offerDetails.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offerDetails.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offerDetails.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offerDetails.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offerDetails.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${totalApplicationsCount}</strong></p>

        <!--Edit and Delete are only for creator-->
        ${user ? html`<div id="action-buttons">
            ${user && user._id == offerDetails._ownerId ? html`<a href="/edit/${offerDetails._id}"
                id="edit-btn">Edit</a>` : null}
            ${user && user._id == offerDetails._ownerId ? html`<a href="/delete/${offerDetails._id}"
                id="delete-btn">Delete</a>` : null}

            <!--Bonus - Only for logged-in users ( not authors )-->
            ${user && user._id != offerDetails._ownerId && !countOfApplicatiosForUser ? html`<a
                href="/apply/${offerDetails._id}" id="apply-btn">Apply</a>` : null}
        </div>`: null}
    </div>
</section>`;