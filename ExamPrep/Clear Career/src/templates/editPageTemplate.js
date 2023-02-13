import { html } from "../../node_modules/lit-html/lit-html.js";

export const editPageTemplate = (onSubmit, offerDetails) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" value="${offerDetails.title}" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url"
                value="${offerDetails.imageUrl}" />
            <input type="text" name="category" id="job-category" placeholder="Category"
                value="${offerDetails.category}" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50">${offerDetails.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${offerDetails.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value="${offerDetails.salary}" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`